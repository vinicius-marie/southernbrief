#!/usr/bin/env python3
"""
Random Douay-Rheims Bible verse picker for Conky.
Reads from ~/.local/share/bible/douay_rheims.txt
Format per line: BookName Chapter:Verse Text of the verse
"""

import random
import sys
import textwrap
from pathlib import Path

BIBLE_FILE = Path.home() / ".local/share/bible/douay_rheims.txt"
MAX_WIDTH = 40  # Characters per line for wrapping

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
    """Format a verse for Conky display."""
    try:
        # Expected format: "BookName Chapter:Verse Text"
        # Split at first space after the reference
        parts = verse_line.split(' ', 2)
        if len(parts) < 3:
            return verse_line
        
        book = parts[0]
        reference = parts[1]
        text = parts[2]
        
        # Wrap the text
        wrapped = textwrap.fill(text, width=MAX_WIDTH, 
                               break_long_words=False,
                               break_on_hyphens=False)
        
        # Format output
        return f"{book} {reference}\n{wrapped}"
    except Exception:
        return verse_line

def main():
    verses = load_verses()
    
    if not verses:
        print("No Bible data found.")
        print(f"Place Douay-Rheims verses in:\n{BIBLE_FILE}")
        return 1
    
    # Pick a random verse
    verse = random.choice(verses)
    formatted = format_verse(verse)
    print(formatted)
    return 0

if __name__ == "__main__":
    sys.exit(main())
