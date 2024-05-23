const PROJECTS = [
    {   id: 1, 
        title: "Project 1", 
        short: "Short bla bluibb but sorem ipsium dkoj",
        description: "Long bla Project 1 bskö dijd ijsdkjaäidjäidn asoiuhsad i",		
        img: "dummy.png",
        project_url: "/project"	,
        status: "open",		
        links: {},
        tags: ["python", "tag2"] },
    {   id: 2, 
        title: "Project 2", 
        short: "Short 2",
        description: "Long bla Project 2 bskö dijd ijsdkjaäidjäidn asoiuhsad i",		
        img: "dummy.png",
        project_url: "/project"	,
        status: "open",		
        links: {},
        tags: ["tag2", "tag3"] },
    {   id: 3, 
        title: "Project 3", 
        short: "Short 3",
        description: "Long bla Project 3 bskö dijd ijsdkjaäidjäidn asoiuhsad i",		
        img: "dummy.png",
        project_url: "/project"	,
        status: "open",		
        links: {},
        tags: ["python", "tag3"] },
    ];

const TAGS = [
    { tag_short: "python", tag_long: "The first tag is python", color_text: "darkred", color_bg: "red" },
    { tag_short: "tag2", tag_long: "The second tag", color_text: "blue", color_bg: "lightblue" },
    { tag_short: "tag3", tag_long: "The third tag", color_text: "white", color_bg: "darkgrey" }
]

exports.myProjects = PROJECTS;
exports.myTags = TAGS;

/*
export const getTagProperties = (tag_short) => {
    const tagData = TAGS.find(tag => tag.tag_short === tag_short);
    if (tagData) {
      return {
        tag_short: tag_short,
        tag_long: tagData.tag_long,
        color_text: tagData.color_text,
        color_bg: tagData.color_bg
      };
    } else {
      return null;
    }
  };
  */

// export default getTagProperties;


