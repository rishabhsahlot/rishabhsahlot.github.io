class ProjectItemData{
    static count=0
    constructor(topic_name, topic_tags, tech_tags, img_name, description){
        this.id = count;
        this.count++;
        this.topic_name = topic_name;
        this.topic_tags = topic_tags;
        this.tech_tags = tech_tags;
        this.img_name = img_name;
        this.description = description;        
    }
}

projects = new Array();
projects.push(ProjectItemData())

