/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
import ClassicEditors from '@ckeditor/ckeditor5-build-classic';


import { EventInfo } from '@ckeditor/ckeditor5-utils';
// 插件的引入
import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn'; //引入特定的语言
// import { Autoformat } from "@ckeditor/ckeditor5-autoformat";

const onChangeHandle = (e: EventInfo<string, unknown>, editor: ClassicEditors) => {
    // console.log(editor.getData(), 'onChangeHandle')
}

const onBlurHandle = (e: EventInfo<string, unknown>, editor: ClassicEditors) => {
    // console.log(e,editor,"onblur")
}

const onFocusHandle = (e: EventInfo<string, unknown>, editor: ClassicEditors) => {
    // console.log(e,editor,"onFocusHandle")
}

const CkEditor: React.FC = () => {

    return (
        <div className='App relative'>
            {/* <h2>Using CKEditor&nbsp;5 build in React</h2> */}

            <CKEditor editor={ClassicEditors}
                data="<p>Hello from CKEditor&nbsp;5!</p>"
                config={
                    {
                        // 编辑器菜单栏开启
                        menuBar: {
                            isVisible: true
                        },
                        // 工具栏
                        toolbar: {items:[ 'undo', 'redo', 'bold', 'italic', 'numberedList', 'bulletedList' ],shouldNotGroupWhenFull:true //若一行 显示不了就换行

                        },
                        // 语言
                        language:'zh-cn',
                        // 插件 集成
                        // plugins:[Autoformat]
                    }
                }
                onReady={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    onChangeHandle(event, editor);
                }}
                onBlur={(event, editor) => {
                    onBlurHandle(event, editor);
                }}
                onFocus={(event, editor) => {
                    onFocusHandle(event, editor);
                }}></CKEditor>
        </div>
    );


}


export default CkEditor;