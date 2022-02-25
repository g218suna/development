let options = {
    el: '#map',
    direction: MindElixir.SIDE,
    // create new map data
    data: mindmapData,
    // the data return from `.getAllData()`
    draggable: true, // default true
    contextMenu: true, // default true
    toolBar: true, // default true
    nodeMenu: true, // default true
    keypress: true, // default true
    locale: 'ja', // [zh_CN,zh_TW,en,ja,pt] waiting for PRs
    overflowHidden: false, // default false
    primaryLinkStyle: 2, // [1,2] default 1
    primaryNodeVerticalGap: 15, // default 25
    primaryNodeHorizontalGap: 15, // default 65
    contextMenuOption: {
        focus: true,
        link: true,
        extend: [{
            name: 'Node edit',
            onclick: () => {
                alert('extend menu')
            },
        }, ],
    },
    allowUndo: false,
    before: {
        insertSibling(el, obj) {
            return true
        },
        async addChild(el, obj) {
            await sleep()
            return true
        },
    },
};


let mind = new MindElixir(options);

mind.bus.addListener('operation', operation => {
    console.log(operation);
    // return {
    //   name: action name,
    //   obj: target object
    // }

    // name: [insertSibling|addChild|removeNode|beginEdit|finishEdit]
    // obj: target

    // name: moveNode
    // obj: {from:target1,to:target2}
});
mind.bus.addListener('selectNode', node => {
    console.log(node);
});

window.onload = () => {
    $btn.onclick = (e) => {
        const form = document.createElement('form');

        let str = window.location.href.split('/').pop().split('.').pop();
        let readMindmapData = new Object();
        readMindmapData = mind.getAllData();
        console.log(readMindmapData);

        form.action = `/save_data/${str}`;
        form.method = 'post';
        document.body.append(form);

        form.addEventListener('formdata', (e) => {
            var fd = e.formData;
            fd.set('data', JSON.stringify(readMindmapData, null));
        });

        form.submit();
    };

    $btn_save.onclick = (e) => {
        painter.exportPng(mind);
    };
};

mind.init();