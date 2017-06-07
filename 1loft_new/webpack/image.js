module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, 
                    loader: "file-loader",
                    options: {
                        name: 'images/[name].[ext]'
                    }
                }
            ]
        }
    };
};