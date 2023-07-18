
import { createClient } from "contentful";
import { useEffect, useState } from "react";

const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
const SPACE_ID = import.meta.env.VITE_SPACE_ID;

const client = createClient({
    space: SPACE_ID,
    environment: 'master',
    accessToken: ACCESS_TOKEN,
});


export const useFetchProjects = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ projects, setProjects ] = useState([])
    // title url id name
    const getData = async () => {
        try {
            const resp = await client.getEntries({ content_type:'reactProjects' })
            console.log(resp);

            const projects = resp.items.map((item) => {
                const title = item.fields?.title;
                const url = item.fields?.url;
                const id = item.sys.id;
                const image = item.fields.image?.fields?.file.url;
                return { id, title, url, image }
            })
            console.log(projects);
            setProjects(projects);
            setIsLoading(false);
        } catch (error) {
            console.log(error)
            setIsLoading(false);
        }
    }


    useEffect(() => {
        getData();
    },[])

    return { isLoading, projects }

}
