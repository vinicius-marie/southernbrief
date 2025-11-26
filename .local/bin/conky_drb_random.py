#!/usr/bin/env python3
"""
Random Douay-Rheims Catholic Bible verse picker for Conky.
Displays complete passages with verse numbers.
Updates daily for meditation.
"""

import random
import sys
import textwrap
from pathlib import Path

BIBLE_FILE = Path.home() / ".local/share/bible/douay_rheims.txt"
MAX_WIDTH = 65  # Characters per line for wrapping

def load_verses():
    """Load all verses from the Douay-Rheims file."""
    if not BIBLE_FILE.exists():
        return []
    
    verses = []
    with open(BIBLE_FILE, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith('#'):
                verses.append(line)
    return verses

def format_verse(verse_line):
    """Format a verse for Conky display with proper verse numbers."""
    try:
        # Expected format: "BookName Chapter:Verse-Range Full text with [1], [2] markers"
        # Split at first space after the reference
        parts = verse_line.split(' ', 1)
        if len(parts) < 2:
            return verse_line
        
        reference = parts[0]
        text = parts[1]
        
        # Wrap the text while preserving verse number markers
        lines = []
        current_line = ""
        words = text.split()
        
        for word in words:
            # Check if adding this word would exceed max width
            test_line = current_line + (" " if current_line else "") + word
            if len(test_line) > MAX_WIDTH and current_line:
                lines.append(current_line)
                current_line = word
            else:
                current_line = test_line
        
        if current_line:
            lines.append(current_line)
        
        wrapped = "\n".join(lines)
        
        # Format output with reference highlighted
        return f"${{{color2}}}${{font DejaVu Sans:bold:size=9}}{reference}${{font}}${{color}}\n{wrapped}"
    except Exception:
        return verse_line

def main():
    verses = load_verses()
    
    if not verses:
        print("No Bible data found.")
        print(f"Run: python3 ~/.local/bin/download_douay_rheims.py")
        return 1
    
    # Pick a random verse
    verse = random.choice(verses)
    formatted = format_verse(verse)
    print(formatted)
    return 0

if __name__ == "__main__":
    sys.exit(main())
