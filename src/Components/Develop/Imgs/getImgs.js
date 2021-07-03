function importAll(r) {
    return r.keys().map(r);
}
let projectImgs = {}

projectImgs["MShare"] = importAll(require.context('./MShare/', false, /\.(png|jpe?g|svg|jfif)$/));
projectImgs["Text2Image"] = importAll(require.context('./Text2Image/', false, /\.(png|jpe?g|svg|jfif)$/));
projectImgs["Hermes AI"] = importAll(require.context('./Hermes AI/', false, /\.(png|jpe?g|svg|jfif)$/));
projectImgs["AgeGAN"] = importAll(require.context('./AgeGAN/', false, /\.(png|jpe?g|svg|jfif)$/));
projectImgs["NYC Taxi Data Analysis"] = importAll(require.context('./NYC Taxi Data Analysis/', false, /\.(png|jpe?g|svg|jfif)$/));
projectImgs["Image Query Language"] = importAll(require.context('./Image Query Language/', false, /\.(png|jpe?g|svg|jfif)$/));
projectImgs["Cloud Security (DDOS) Middleware for Database as a Service"] = importAll(require.context('./Cloud Security (DDOS) Middleware for Database as a Service/', false, /\.(png|jpe?g|svg|jfif)$/));
projectImgs["Time-Aware Sparsity Tolerant QoS based Web-Service Recommendation"] =importAll(require.context('./Time-Aware Sparsity Tolerant QoS based Web-Service Recommendation/', false, /\.(png|jpe?g|svg|jfif)$/));
projectImgs["Agriculture Recommendation"] = importAll(require.context('./Agriculture Recommendation/', false, /\.(png|jpe?g|svg|jfif)$/));
projectImgs["Web Service Preprocessed Querying"] = importAll(require.context('./Web Service Preprocessed Querying/', false, /\.(png|jpe?g|svg|jfif)$/));
projectImgs["Password Guessing using Contrastive Predictive Coding"] = importAll(require.context('./Password Guessing using Contrastive Predictive Coding/', false, /\.(png|jpe?g|svg|jfif)$/));

export default projectImgs