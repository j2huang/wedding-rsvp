function Invitations() {
    const myHTML = `
    <div class="typeform-widget" data-url="https://form.typeform.com/to/FOdVBYAG?typeform-medium=embed-snippet" style="width: 100%; height: 630px;"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script>
    `;
  
    return (
        <div dangerouslySetInnerHTML={{ __html: myHTML }} />
    )
  }

  export default Invitations;
