function Invitations() {
    const myHTML = `
    <div style="text-align:center;"> 
    <button data-tf-popup="FOdVBYAG" style="all:unset;font-family:Helvetica,Arial,sans-serif;display:inline-block;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background-color:#FBCE37;font-size:20px;border-radius:25px;color:#fff;padding:0 33px;font-weight:bold;height:50px;cursor:pointer;line-height:50px;text-align:center;margin:0;text-decoration:none;">RSVP Here</button><script src="//embed.typeform.com/next/embed.js"></script>
    </div>
    `;
  
    return (
        <div dangerouslySetInnerHTML={{ __html: myHTML }} />
    )
  }

  export default Invitations;
