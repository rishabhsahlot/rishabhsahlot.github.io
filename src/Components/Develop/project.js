let projects = [
    {
        name : "MShare",
        collaborators: ["Kishan Singh Rathore","Adit Sadiwala"],
        collaborator_links : ["https://www.linkedin.com/in/kishan-singh-rathore-36791914a/","https://www.linkedin.com/in/adit-sadiwala-12a88915b/"],
        topic_tags: ["Frontend", "Backend", "Gmail authentication", "Slugs", "Website"],
        tech_tags: ["Django", "Python" ,"Javascript", "Jquery", "HTML", "Bootstrap", "CSS", "Material Design"],
        description: "A website like sound cloud, with account-based setting to upload, like and share music"
    },
    {
        name : "Text2Image",
        collaborators: ["Karthik Nair","Purvam Pujari"],
        collaborator_links : ["https://www.linkedin.com/in/karthik-nair-93223712a/","https://www.linkedin.com/in/purvampujari/"],
        topic_tags: ["Frontend", "Deep Learning", "Natural Language Processing", "Computer Vision", "Attention", "Generative Adversarial Networks", "Character RNN", "CNN"],
        tech_tags: ["Flask", "Python", "Pytorch", "Google Collab", "Javascript", "Jquery", "HTML", "Bootstrap", "CSS"],
        description: "A website for utilizing pre-trained text encoder network(uses Character RNN) & pre-trained Fake Image Generator(from Generative Adversarial Networks) to create Bird Images from captions/text descriptions.The training of the two models is on Google Collab."
    },
    {
        name : "Hermes AI",
        collaborators : ["Aayush Kumar","Samuel Rose","Arturo"],
        collaborator_links : ["https://www.linkedin.com/in/aayushkumar14/","",""],
        topic_tags: ["Frontend", "Deep Learning", "Natural Language Processing", "Computer Vision", "Chatbot","Disaster Mitigation","APIs", "Virtual Assistant", "Image Classification","Cloud","Database"],
        tech_tags: ["Flask", "Node.js","React.js", "MongoDB Atlas Cluster", "IBM Watson", "IBM Visual Recognition", "HTML", "Bootstrap", "CSS"],
        description: "A disaster analysis app that used image(/wound) classification and Virtual Assistant to gather information for the first responder."
    },
    {
        name : "AgeGAN",
        collaborators : ["Aishwarya Rao","Anuj Kulkarni","Shweta Vijay Wahane"],
        collaborator_links : ["https://www.linkedin.com/in/aishwarya-rao-003/","https://www.linkedin.com/in/anuj-kulkarni-0411/",""],
        topic_tags : ["Frontend", "Deep Learning",  "Natural Language Processing", "Computer Vision","Generative Adversarial Networks", "Conditional GANs", "DLIB Face Vectors"],
        tech_tags : ["Python", "Pytorch", "Google Collab"],
        description: "This is a website for Age-editing of Faces."
    },
    {
        name : "NYC Taxi Data Analysis",
        collaborators : ["Tejas Patel","Karanjit Singh"],
        collaborator_links : ["https://www.linkedin.com/in/tp231095/","https://www.linkedin.com/in/karanjit-singh-230708191/"],
        topic_tags : ["Big Data", "Analytics",  "Machine Learning"],
        tech_tags : ["Python", "MongoDB", "scikit-learn","Clustering","Prediction"],
        description : "Integrated NYC yellow taxi data with NYC criminal arrests & educational institutions data for metropolitan traffic analysis. Added tables to link the 3 datasets. Made use of clustering & classification algorithms to identify regions, trends & factors affecting traffic."
    },
    {
        name : "Image Query Language",
        collaborators : [],
        collaborator_links : [],
        topic_tags : ["Computer Vision", "Scale Invariant Feature Transform", "Vector of Locally Aggregated Descriptor", "Ball Tree", "Database"],
        tech_tags : ["Python", "opencv","scikit-learn"],
        description : "Implemented a Content Based Image Retrieval (CBIR) System, using SIFT key-points and VLAD vectors."
    },
    {
        name : "Cloud Security (DDOS) Model for Database as a Service",
        collaborators : ["Suhas CV"],
        collaborator_links : ["https://www.linkedin.com/in/suhascv/"],
        topic_tags : ["Cloud", "Database", "Database Logs", "Security", "Distributed Denial of Service", "Middleware", "Privacy"],
        tech_tags : ["Python", "MongoDB Atlas Cluster", "scikit-learn"],
        description : "Studied log data of DBaaS such as Mongo DB Atlas & Amazon RDS, simulated an offline DDOS attack, & used log data from those simulations to do streaming training & detection models for DDOS attacks. Studied privacy infraction, and data requirements for detection models."
    },
    {
        name : "Time-Aware Sparsity Tolerant QoS based Web-Service Recommendation",
        collaborators : ["Vishnu ByReddy", "Adya Shrivastava", "Pranjal Pandey"],
        collaborator_links : ["https://www.linkedin.com/in/vishnu-byreddy-602a221b9/","https://www.linkedin.com/in/adyashrivastava/","https://www.linkedin.com/in/pranjal1511/"],
        topic_tags : ["Web Services", "Recommendation System", "Database"],
        tech_tags : ["Python", "Postgresql", "numpy"],
        description : "Did a python-based implementation from scratch of the same paper as the topic."
    },
    {
        name : "Agriculture Recommendation",
        collaborators : [],
        collaborator_links : [],
        topic_tags : ["Frontend", "Backend", "Web Services", "APIs", "SOAP", "REST", "WSDL", "XML", "Cors"],
        tech_tags : ["Javascript", "React.js", "Node.js", "Express.js", "HTML", "Bootstrap", "CSS"],
        description : "Provided a javascript-based local client-server web UI for getting climate,soil,agricultural news information from SOAP based APIs on the server side and displaying it on the client side's front-end"
    },
    {
        name : "Web Service Preprocessed Querying",
        collaborators : [],
        collaborator_links : [],
        topic_tags : ["Frontend", "Backend", "Database","Web Services", "Pre-processing","Cors"],
        tech_tags : ["Django", "Djongo","MongoDB","Javascript", "React.js", "Node.js", "HTML", "Bootstrap", "Semantic-UI", "CSS"],
        description : "Provided a local client-server web UI with django server and javascript client for inserting processed, serialized data in MongoDB database and querying they on the server-side ports using the axios APIs on the client-side"
    }
];

export default projects;