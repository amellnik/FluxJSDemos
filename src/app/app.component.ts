import { Component } from '@angular/core';
import { ClarityIcons } from "@clr/icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    ClarityIcons.add({"julia": `<svg
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:cc="http://creativecommons.org/ns#"
     xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
     xmlns:svg="http://www.w3.org/2000/svg"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
     xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
     xml:space="preserve"
     version="1.1"
     viewBox="0 0 104.33789 96.837892"
     id="svg2"
     inkscape:version="0.91 r13725"
     sodipodi:docname="julia_logo.svg"
     width="104.33789"
     height="96.837891"><defs
       id="defs30" /><circle
       cx="25.918945"
       cy="-70.918945"
       r="20"
       id="circle22"
       style="fill:#d5635c;stroke:#cb3c33;stroke-width:3.83789062;stroke-linecap:butt;stroke-miterlimit:4"
       transform="scale(1,-1)" /><circle
       cx="52.168945"
       cy="-25.918945"
       r="20"
       id="circle24"
       style="fill:#60ad51;stroke:#389826;stroke-width:3.83789062;stroke-linecap:butt;stroke-miterlimit:4"
       transform="scale(1,-1)" /><circle
       cx="78.418945"
       cy="-70.918945"
       r="20"
       id="circle26"
       style="fill:#aa79c1;stroke:#9558b2;stroke-width:3.83789062;stroke-linecap:butt;stroke-miterlimit:4"
       transform="scale(1,-1)" /></svg>`});
  }
}
