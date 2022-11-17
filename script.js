const fileInput = document.querySelector("input"),
downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click",() => {
    downloadBtn.innerText = "Baixando arquivo ..."
    fetchFile(fileInput.value);

});

function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file => {

        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempUrl);
        downloadBtn.innerText = "Download do arquivo"
    }).catch(() => {
        downloadBtn.innerText = "Download do arquivo"
        alert("O Download do arquivo falhou!");
    });
}