import { useEffect } from "react";
import GithubApi from "./../api/github";


export const PostsScreen = () => {

    useEffect(() => {
        getGists();
    }, []);

    const getGists = async() => {
        await GithubApi.getGistsByUser('ryantm').then((res) => {
            console.log(JSON.stringify(res));
        }).catch((err) => console.log(err));
    };

    return (
        <div>
            <h1>Posts screen</h1>
        </div>
    )
};

