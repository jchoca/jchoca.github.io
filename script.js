(function () {
    var blog = "Blog";
    var resume = "Resume";
    var cursor = "_";

    var intervalId = setInterval(typeResume, 250);

    function typeResume() {
        resume = typeVal('resume', resume);
        if (!resume) { 
            clearInterval(intervalId);
            setTimeout(function () {
                removeCursor('resume');
                intervalId = setInterval(typeBlog, 250);
            }, 750);
        }
    }

    function typeBlog() {
        blog = typeVal('blog', blog);
        if (!blog) { clearInterval(intervalId); }
    }

    function removeCursor(id) {
        var element = document.getElementById(id);
        element.textContent = element.textContent.slice(0, element.textContent.length-1);
    }

    function typeVal(id, text) {
        var element = document.getElementById(id);
        var innerText = element.textContent;
        if (innerText[0] !== '>') {
            element.innerText = '> ';
        }
        if (text) {
            if (innerText[innerText.length-1] === cursor) {
                document.getElementById(id).textContent = innerText.slice(0, innerText.length-1);
            }
            element.textContent += text[0] + cursor;
            text = text.slice(1,text.length);
        }
        return text;
    }
})();