function Invitations() {
    const myHTML = `
    <div style="text-align:center;"> <a class="typeform-share button" href="https://form.typeform.com/to/FOdVBYAG?typeform-medium=embed-snippet" data-mode="popup" style="display:inline-block;text-decoration:none;background-color:#FBCE37;color:#0B2826;cursor:pointer;font-family:Helvetica,Arial,sans-serif;font-size:20px;line-height:50px;text-align:center;margin:0;height:50px;padding:0px 33px;border-radius:25px;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:bold;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;" data-size="100" target="_blank">RSVP Here </a> </div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script>
    `;
  
    return (
        <div dangerouslySetInnerHTML={{ __html: myHTML }} />
    )
  }

  export default Invitations;
