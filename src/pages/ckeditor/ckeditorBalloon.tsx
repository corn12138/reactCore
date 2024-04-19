/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { Editor } from '@ckeditor/ckeditor5-core';
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';


const CkeditorBalloon: React.FC = () => {
    const editorContainerRef = useRef<HTMLDivElement>(null);
    // 使用 CKEditor 5 的 Editor 类型
    const editorInstanceRef = useRef<Editor | null>(null);

    useEffect(() => {
        if (editorContainerRef.current) {
            BalloonEditorBase.create(editorContainerRef.current, {
                plugins: [Essentials, Paragraph, Bold, Italic],
                toolbar: ['bold', 'italic']
            })
            .then(editor => {
                editorInstanceRef.current = editor;
                console.log('Editor was initialized', editor);
            })
            .catch(error => {
                console.error('There was a problem initializing the editor.', error);
            });

            return () => {
                if (editorInstanceRef.current) {
                    editorInstanceRef.current.destroy()
                        .catch(error => console.error('Error during editor cleanup', error));
                }
            };
        }
    }, []);

    return (
        <div className="App">
            <h2>Using a custom CKEditor 5 build in a functional component</h2>
            <div ref={editorContainerRef}></div>
        </div>
    );
};

export default CkeditorBalloon;