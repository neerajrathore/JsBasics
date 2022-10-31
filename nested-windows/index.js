console.log("connection");

let newWindow;

const openNewWindow = () => {
    const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=300,height=300`;
    newWindow = window.open('sub.html', 'sub', params);
    // document.window.open(params);
}

const response = document.getElementById("response")
window.addEventListener("message", (event)=>{
    console.log(event);
    if(event.data.foo){

        response.innerText = event.data.foo;
    }
    if(event.data.msg){

        response.innerText = event.data.msg;
    }
})


const sendMessage = () => {
    // console.log(document.location.toString());
    // document.location.replace("http://127.0.0.1:5500/nested-windows/sub.html");

    newWindow.postMessage({ foo: 'bar' }, '*');
}

const clikc11 = (e) => {
    // console.log(e);
    // document.location.replace("http://127.0.0.1:5500/nested-windows/index.html");
    // window.opener.postMessage({ foo: 'barsss' }, '*');
    newWindow.postMessage({ foo: 'bardwdwdwdw' }, '*');

}

const closeWindow = (message) => {
    window.opener.postMessage({ msg: message }, '*');
    window.close();
  };
