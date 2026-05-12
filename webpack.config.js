import path from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin'; 

export default {
    mode: 'development',
    entry: {
        main: './src/index.js',
        about: './src/about.js',
        service: './src/service.js',
        contact: './src/contact.js',
        tips: './src/tips.js',
        pricing: './src/pricing.js',
        article1: './src/article1.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(import.meta.dirname, 'dist'),
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/**/*.html"],
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['main'],
        }),
        new HtmlWebpackPlugin({
            template: './src/about.html',
            filename: 'about.html',
            chunks: ['about'],
        }),
        new HtmlWebpackPlugin({
            template: './src/service.html',
            filename: 'service.html',
            chunks: ['service'],
        }),
        new HtmlWebpackPlugin({
            template: './src/contact.html',
            filename: 'contact.html',
            chunks: ['contact'],
        }),
        new HtmlWebpackPlugin({
            template: './src/tips.html',
            filename: 'tips.html',
            chunks: ['tips'],
        }),
        new HtmlWebpackPlugin({
            template: './src/pricing.html',
            filename: 'pricing.html',
            chunks: ['pricing'],
        }),
        new HtmlWebpackPlugin({
            template: './src/article1.html',
            filename: 'article1.html',
            chunks: ['article1'],
        }),

        // Added CopyPlugin to handle robots.txt and sitemap.xml
        new CopyPlugin({
            patterns: [
                { from: "./src/robots.txt", to: "robots.txt" },
                { from: "./src/sitemap.xml", to: "sitemap.xml" },
            ],
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.html$/i,
                use: ['html-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};


// import path from 'node:path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import CopyPlugin from 'copy-webpack-plugin';

// export default {
//   mode: 'development',
//   entry: {
//     main: './src/index.js',
//     about: './src/about.js',
//     service: './src/service.js',
//     contact: './src/contact.js',
//   },
//   output: {
//     filename: '[name].js',
//     path: path.resolve(import.meta.dirname, 'dist'),
//     clean: true,
//   },
//   // Switched to 'cheap' source map for significantly faster re-builds
//   devtool: "eval-cheap-module-source-map", 
//   devServer: {
//     watchFiles: ["./src/**/*.html"],
//     hot: true,
//     // Automatically opens the browser to speed up your workflow
//     open: true, 
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/index.html',
//       filename: 'index.html',
//       chunks: ['main'],
//     }),
//     new HtmlWebpackPlugin({
//       template: './src/about.html',
//       filename: 'about.html',
//       chunks: ['about'],
//     }),
//     new HtmlWebpackPlugin({
//       template: './src/service.html',
//       filename: 'service.html',
//       chunks: ['service'],
//     }),
//     new HtmlWebpackPlugin({
//       template: './src/contact.html',
//       filename: 'contact.html',
//       chunks: ['contact'],
//     }),
//     new CopyPlugin({
//       patterns: [
//         { from: "./src/robots.txt", to: "robots.txt" },
//         { from: "./src/sitemap.xml", to: "sitemap.xml" },
//       ],
//     }),
//     // Removed [contenthash] here as well to prevent slow disk writes in dev
//     new MiniCssExtractPlugin({
//       filename: '[name].css',
//     }),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         // Using style-loader instead of MiniCssExtractPlugin.loader 
//         // eliminates the delay and enables instant CSS updates
//         use: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.html$/i,
//         use: ['html-loader'],
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/i,
//         type: 'asset/resource',
//       },
//     ],
//   },
// };
