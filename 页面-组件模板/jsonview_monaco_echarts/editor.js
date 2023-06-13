function initEditor() {
    require.config({
        paths: {
            'vs': './monaco'
        }
    });
    require.config({
        'vs/nls': {
            availableLanguages: {
                '*': 'zh-cn'
            }
        }
    });
    // var editor;
    require(['vs/editor/editor.main'], function () {
        window.editor = monaco.editor.create(document.getElementById('editBox'), {
            value: '{"name":"zzh","age":18,"hobby":["t1","t2"]}',
            language: 'json',
            theme: 'vs-dark',
            fontSize: '12px',
            formatOnPaste: true,
        });

        window.editor.getModel().onDidChangeContent((event) => {
            // console.log('code change:' + JSON.stringify(event));
            // TODO： 当编辑器内容变化时，获取全部代码，（防抖，先判断是不是json再做操作）渲染右侧预览界面
            const value = window.editor.getValue();
            // console.log('value: ' + value);
            initPreview(value);
        });
    });
}

function editorFormat() {
    window.editor.getAction('editor.action.formatDocument').run(); //自动格式化代码
    window.editor.setValue(editor.getValue()); //再次设置
}

function editorSetValue(value) {
    window.editor.setValue(value);
    window.editor.getAction('editor.action.formatDocument').run(); //自动格式化代码
    window.editor.setValue(editor.getValue()); //再次设置 
}

function isJsonString(str) {
    try {
        if (typeof JSON.parse(str) == "object") {
            return true;
        }
    } catch (error) {
        alert('请确认数据格式是否正确：' + error);
    }
    return false;
}