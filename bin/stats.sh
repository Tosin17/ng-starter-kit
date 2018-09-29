#!/usr/bin/env bash

# NOTE: You should have brew installed if you are on a mac
# Or Choco if you are on windows
# https://www.npmjs.com/package/webpack-stats-graph

g1=graphviz;
g2=webpack-stats-graph;

# Check if graphviz is installed
if brew list -1 | grep -q "^${g1}\$"; then
        echo "Package '$g1' is installed"
    else
        echo "Installing package '$g1'"
        brew install graphviz
    fi

# Install `webpack-stats-graph` if not installed locally
if [ `npm list -D | grep -c $g2` -eq 0 ]; then
    echo "Installing webpack-stats-graph"
    npm i -D $g2
fi

echo "Generating dependency graph"
webpack --json > stats.json

npx webpack-stats-graph --show-size --color-by-size --show-sources

echo "Done! See graph in statsgraph directory"
echo "Don't forget to replace data-uri in interactive.html to graph.svg"
