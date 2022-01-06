import React from "react";
import FileExplorer from "./FileExplorer/FileExplorer";
import styled from "styled-components";
import { files } from "../data";
import CustomSandpack from "./CodeEditor/CodeEditor";

const Layout = styled.div`
    display: grid;
    grid-template-columns: 20% 80%;
    width: 100%;
`
export default class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: files,
        }
    }

    activeFile = (path) => {
        var files = {...this.state.files};
        for(let file in files){
            if(files[file].active){
                console.log(file)
                files[file].active = false;
                files[file].hidden = true;
            }
        }
        var file = {...this.state.files[path]};
        file.active = true;
        file.hidden = false;
        files[path] = file;
        this.setState({files: files});
    }

    render() {
        console.log(this.state.files)
        return (
            <Layout>
                <FileExplorer
                    activeFile={this.activeFile}
                />
                {/* <CodeEditor
                    openPath={this.state.openPath}
                    deleteOpenPath={this.deleteOpenPath}
                    activeFile={this.activeFile}
                    viewFile={this.state.viewFile}
                /> */}
                <CustomSandpack
                    files={this.state.files}
                />
            </Layout>
        )
    }
}   