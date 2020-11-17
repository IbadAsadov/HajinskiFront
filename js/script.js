(function () {

    const cursor = document.querySelectorAll('.capiton-cursor');

    cursor.forEach(function(element){
        const editCursor = e => {
            const { clientX: x, clientY: y } = e;
            element.style.left = x + 'px';
            element.style.top = y + 'px';
        };
        window.addEventListener('mousemove', editCursor);
    })
    

    

    })();
