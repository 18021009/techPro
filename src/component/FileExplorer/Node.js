import React from "react";
import { FaFile, FaFolder, FaFolderOpen, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import last from 'lodash/last';
import styled from 'styled-components';

const getNodeLabel = (node) => last(node.path.split('/'));

const getPaddingLeft = (level, type) => {
    let paddingLeft = level * 20;
    if (type === 'file') paddingLeft += 20;
    return paddingLeft;
}

const StyledNode = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: ${props => getPaddingLeft(props.level, props.type)}px;
    &:hover {
        background: lightgray;
    }
`;

const NodeIcon = styled.div`
    font-size: 20px;
    margin-right: ${props => props.marginRight ? props.marginRight : 5}px;
`;

export default class Node extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <StyledNode
                    level={this.props.level}
                    type={this.props.node.type}
                >
                    <NodeIcon onClick={() => this.props.onToggle(this.props.node)}>
                        {this.props.node.type === 'folder' && (this.props.node.isOpen ? <FaChevronDown /> : <FaChevronRight />)}
                    </NodeIcon>
                    <NodeIcon>
                        {this.props.node.type === 'file' && <FaFile role="button" onClick={() => this.props.activeFile(this.props.node.path)
                        } />}
                        {this.props.node.type === 'folder' && !this.props.node.isOpen && <FaFolder />}
                        {this.props.node.type === 'folder' && this.props.node.isOpen && <FaFolderOpen />}
                    </NodeIcon>
                    {getNodeLabel(this.props.node)}
                </StyledNode>
                {this.props.node.isOpen && this.props.getChildNodes(this.props.node).map((child) =>
                    <Node
                        {...this.props}
                        level={this.props.level + 1}
                        node={child}
                        getChildNodes={this.props.getChildNodes}
                    ></Node>
                )}
            </div>
        )
    }
}