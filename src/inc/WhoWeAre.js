import React from "react";
import Meeting from "../components/images/meeting.jpg";

function WhoWeAre() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <img src={Meeting} alt="" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h3>Who we are</h3>
          <p>
            Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
            Suspendisse dui purus, scelerisque at, vulputate vitae, pretium
            mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut
            nonummy. Fusce aliquet pede non pede. Suspendisse dapibus lorem
            pellentesque magna. Integer nulla. Donec blandit feugiat ligula.
            Donec hendrerit, felis et imperdiet euismod, purus ipsum pretium
            metus, in lacinia nulla nisl eget sapien. Donec ut est in lectus
            consequat consequat. Etiam eget dui. Aliquam erat volutpat. Sed at
            lorem in nunc porta tristique. Proin nec augue. Quisque aliquam
            tempor magna. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Nunc ac magna. Maecenas
            odio dolor, vulputate vel, auctor ac, accumsan id, felis.
            Pellentesque cursus sagittis felis.
          </p>
          <h3>Who are Investor</h3>
          <p>
            Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
            Suspendisse dui purus, scelerisque at, vulputate vitae, pretium
            mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut
            nonummy. Fusce aliquet pede non pede. Suspendisse dapibus lorem
            pellentesque magna. Integer nulla. Donec blandit feugiat ligula.
            Donec hendrerit, felis et imperdiet euismod, purus ipsum pretium
            metus, in lacinia nulla nisl eget sapien. 
            Donec blandit feugiat ligula.
            Donec hendrerit, felis et imperdiet euismod, purus ipsum pretium
            metus, in lacinia nulla nisl eget sapien. <br></br>
            <button className="btn">Read more...</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
