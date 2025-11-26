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
        # Find where the actual verse text starts (after first [)
        bracket_pos = verse_line.find('[')
        if bracket_pos == -1:
            return verse_line
        
        # Everything before [ is the reference
        reference = verse_line[:bracket_pos].strip()
        text = verse_line[bracket_pos:]
        
        # Use textwrap for proper line wrapping
        wrapped_lines = textwrap.fill(text, width=MAX_WIDTH, break_long_words=False, break_on_hyphens=False)
        
        # Format output with reference highlighted (Conky formatting)
        return f"${{color2}}${{font DejaVu Sans:bold:size=9}}{reference}${{font}}${{color}}\n{wrapped_lines}"
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
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
