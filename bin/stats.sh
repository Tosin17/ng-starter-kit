# NOTE: Make sure `graphviz` is installed. https://www.npmjs.com/package/webpack-stats-graph

g1=graphviz;
g2=webpack-stats-graph;

# Check if graphviz is installed
if dot -V; then
    echo "Package '$g1' is installed"
else
    echo "Please install $g1. You can check https://www.npmjs.com/package/webpack-stats-graph"
    exit 0
fi

# Install `webpack-stats-graph` if not installed locally
if [ `npm list -D | grep -c $g2` -eq 0 ]; then
    echo "Installing webpack-stats-graph"
    npm i -D $g2
fi

echo "Generating dependency graph"
webpack --json > stats.json

npx webpack-stats-graph --show-size --color-by-size --show-sources --show-exports -show-dep-type

echo "Done! See graph in statsgraph directory"
echo "Don't forget to replace data-uri in interactive.html to graph.svg"
