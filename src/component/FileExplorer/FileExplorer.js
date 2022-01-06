import React from 'react';
import styled from 'styled-components';
import { folder } from './../../data';
import Node from './Node';

const StyledFileExplorer = styled.div`
   
`

export default class FileExplorer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            folder: folder,
        }
    }

    getChildNodes = (node) => {
        if(!node.children) return []
        const { folder } = this.state;
        var childNodes = [];
        for (let i = 0; i < node.children.length; i++) {
            for (let j = 0; j < folder.length; j++) {
                if (node.children[i] === folder[j].path) {
                    childNodes.push(folder[j]);
                }
            }
        }
        return childNodes;
    }

    onToggle = (node) => {
        const { folder } = this.state;
        node.isOpen = !node.isOpen;
        this.setState({folder})
    }

    createFolder = (node) => {

    }
    
    createFile = (node) => {

    }

    delete = (node) => {

    }

    rename = (node) => {
        
    }
    render() {
        return (
            <StyledFileExplorer>
                <Node
                    node={this.state.folder[0]}
                    getChildNodes={this.getChildNodes}
                    onToggle={this.onToggle}
                    level = {0}
                    activeFile = {this.props.activeFile}
                >
                </Node>
            </StyledFileExplorer>
        )
    }
}