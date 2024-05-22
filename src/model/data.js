const PROJECTS = [
    {   id: 1, 
        title: "Project 1", 
        short: "Short 1",
        description: "Long bla Project 1 bskö dijd ijsdkjaäidjäidn asoiuhsad i",		
        img: "path",
        project_url: "/project"	,
        status: "open",		
        links: {},
        tags: ["tag1", "tag2"] },
    {   id: 2, 
        title: "Project 2", 
        short: "Short 2",
        description: "Long bla Project 2 bskö dijd ijsdkjaäidjäidn asoiuhsad i",		
        img: "path",
        project_url: "/project"	,
        status: "open",		
        links: {},
        tags: ["tag2", "tag3"] },
    {   id: 3, 
        title: "Project 3", 
        short: "Short 3",
        description: "Long bla Project 3 bskö dijd ijsdkjaäidjäidn asoiuhsad i",		
        img: "path",
        project_url: "/project"	,
        status: "open",		
        links: {},
        tags: ["tag1", "tag3"] },
    ];

const TAGS = [
    { tag_short: "tag1", tag_long: "The first tag", color_text: 0xf5f5dc, color_bg: 0x00000 },
    { tag_short: "tag2", tag_long: "The second tag", color_text: 0xf5f5dc, color_bg: 0x00000 },
    { tag_short: "tag3", tag_long: "The third tag", color_text: 0xf5f5dc, color_bg: 0x00000 }
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


