function Invitations() {
    const myHTML = `
    <div style="text-align:center;"> 
    <a class="typeform-share button" href="typeform.html" data-mode="popup" style="display:inline-block;text-decoration:none;background-color:#FBCE37;color:#0B2826;cursor:pointer;font-family:Helvetica,Arial,sans-serif;font-size:20px;line-height:50px;text-align:center;margin:0;height:50px;padding:0px 33px;border-radius:25px;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:bold;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;" data-size="100" target="_blank">RSVP Here </a> </div> 
    `;
  
    return (
        <div dangerouslySetInnerHTML={{ __html: myHTML }} />
    )
  }

  export default Invitations;
