
module.exports = {
    "presets": [
        "@babel/preset-react",
        [
            "@babel/preset-env",
            {
                "targets": [
                    "last 2 versions",
                    "ie >= 11",
                    "> 5%"
                ]
            }
        ]
    ],
    "plugins": [
        "@babel/plugin-proposal-class-properties"
    ],
    "env": {
        "test": {
            "plugins": ["require-context-hook"]
        }
    }
}
