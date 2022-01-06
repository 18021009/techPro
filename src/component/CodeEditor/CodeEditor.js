import {
    SandpackProvider,
    SandpackLayout,
    SandpackCodeEditor,
    SandpackPreview
} from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";
import { useActiveCode } from "@codesandbox/sandpack-react";

const CustomAceEditor = (props) => {
    const { code } = useActiveCode();
    const sendCode = () => {
        console.log(code);
    };
    return (
        <div>
            {/* <CodeNavigator/> */}
            <SandpackCodeEditor
            />
            <button onClick={sendCode}>saveCode</button>
        </div>
    );
};
export default function CustomSandpack(props) {
    const { files } = props
    return (
        <SandpackProvider
            customSetup={{
                files: files,
                entry: "/src/index.js",
                dependencies: {
                    "react": "17.0.2",
                    "react-dom": "17.0.2",
                    "react-scripts": "4.0.0",
                },
            }}
        >
            <SandpackLayout>
                <CustomAceEditor />
                <SandpackPreview />
            </SandpackLayout>
        </SandpackProvider >
    );
}
