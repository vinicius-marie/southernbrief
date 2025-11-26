#!/usr/bin/env bash
# Polybar launcher script for XFCE with Nord theme

# Terminate already running bar instances
killall -q polybar

# Wait until the processes have been shut down
while pgrep -u $UID -x polybar >/dev/null; do sleep 1; done

# Launch polybar with new config
echo "---" | tee -a /tmp/polybar.log
polybar -q -r main --config=$HOME/.config/polybar/config-nord.ini 2>&1 | tee -a /tmp/polybar.log & disown

echo "Polybar launched..."
