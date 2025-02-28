function apply_style_rule()
{
    const style = document.createElement('style');  // Create a <style> element
    style.innerHTML = `
      
        @media screen{
            ._aigs {
                min-width:0px !important;
            }

            .two ._aigw {
                flex:0 0 100% !important;
                max-width: calc(100% - var(--navbar-width)) !important;
            }

            .three ._aigw {
                flex: 0% !important;
                max-width: 45% !important;
            }

            .three ._aig- {
                position: absolute !important;
                right: 0 !important;
                width: 100% !important;
                max-width: calc(100% - var(--navbar-width)) !important;
                height: 100% !important;
            }

            .three ._as5a {
                max-width: calc(100% - var(--navbar-width-expanded)) !important;
            }

            .app-wrapper-web ._aigs:not(._as6h) {
                top:0px !important;
                width: 100% !important;
                max-width: 100% !important;
                height: 100% !important;
                margin: 0 auto !important;
                box-shadow: 0px 6px 18px rgba(var(--shadow-rgb), .05) !important;
            }

            // channel chat
            ._ahy5 {
                margin: -3px -4px 6px -6px !important;
                width: calc(75% - 10px) !important;
            }

            .x1o095ql {
                width: auto !important; 
            }
        
            .x1rjt51p {
                max-width: 100% !important;
            }

            // pdf community chat
            div.x9f619.x1u9i22x.xjcl138.x1gwem2t.x1idk2jd.x1yuel0x + div {
                width: auto !important;
            }
            div.x9f619.x1u9i22x.xjcl138.x1gwem2t.x1idk2jd.x1yuel0x {
                width: auto !important;
            }
                
            
            // reaction chat
            
            div._ak4w._ak51 + div {
               width: 80% !important;
                left: var(--navbar-width) !important;
            }
            div._ak4w._ak51 {
               width: 80% !important;
                left: var(--navbar-width) !important;
            }     
            
            div.x9f619.x1hx0egp.x1yuel0x.x1yrsyyn.x1sxyh0.xwib8y2.xohu8s8 + div {
                width: auto !important;
            }
            div.x9f619.x1hx0egp.x1yuel0x.x1yrsyyn.x1sxyh0.xwib8y2.xohu8s8 {
                width: auto !important;
            }

            div.x9f619.x1hx0egp.x1yuel0x.x1yrsyyn.x1ct7el4.x1dm7udd.xwib8y2 + div {
                width: auto !important;
            }
            div.x9f619.x1hx0egp.x1yuel0x.x1yrsyyn.x1ct7el4.x1dm7udd.xwib8y2 {
                width: auto !important;
            }

            // remove from chat
            div._amk1 + div {
                width: 80% !important;
            }
            div._amk1 {
                width: 80% !important;
            }


            div.x9f619.x1hx0egp.x1yuel0x.x1yrsyyn.xpr8y4f.x18d9i69.x1yzk5dy + div {
                width: auto !important;
            }
            div.x9f619.x1hx0egp.x1yuel0x.x1yrsyyn.xpr8y4f.x18d9i69.x1yzk5dy {
                width: auto !important;
            }

            div.x9f619.x1u9i22x.xjcl138.x1idk2jd.x1yt8dio.x1yuel0x + div {
                width: auto !important;
            }
            div.x9f619.x1u9i22x.xjcl138.x1idk2jd.x1yt8dio.x1yuel0x {
                width: auto !important;
            }

            div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1p5oq8j.xn6708d.xwxc41k.x1ye3gou.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x6s0dn4.x1b14inu.x9f619 + div {
                width: auto !important;
            }
            div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1p5oq8j.xn6708d.xwxc41k.x1ye3gou.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x6s0dn4.x1b14inu.x9f619 {
                width: auto !important;
            }

            .xr6pica {
                width: 80% !important;
            }

            .xpb48g7 {
                min-width: auto !important;
            }


            div._ahyv.copyable-text + div {
                width: auto !important;
            }
            div._ahyv.copyable-text {
                width: auto !important;
            }

            div.x9f619.x78zum5.xdt5ytf.x1v8jjaa.xkwfhqy.x17e6fzg.x15dh256.x1t7u3xy.x1shw4ur.x6ikm8r.x10wlt62.x1n2onr6.x1iyjqo2.xs83m0k.x1l7klhg.xs8rnei.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1coevs8.x11i5rnm.xui9b5u.x1mh8g0r.xg3pqpk.x5frtva.x1a6k631.x9b845u.x1n7bigs.x180mg20.x12v3509.x14m7gzy + div {
                width: 90% !important;
            }
            div.x9f619.x78zum5.xdt5ytf.x1v8jjaa.xkwfhqy.x17e6fzg.x15dh256.x1t7u3xy.x1shw4ur.x6ikm8r.x10wlt62.x1n2onr6.x1iyjqo2.xs83m0k.x1l7klhg.xs8rnei.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1coevs8.x11i5rnm.xui9b5u.x1mh8g0r.xg3pqpk.x5frtva.x1a6k631.x9b845u.x1n7bigs.x180mg20.x12v3509.x14m7gzy {
                width: 90% !important;
            } 

            div.x9f619.x78zum5.x1c4vz4f.x2lah0s.xdl72j9.xdt5ytf.xvue9z.x1xy6bms.xxbr6pl.xx6bls6.xbbxn1n.x1v8jjaa.xkwfhqy.x17e6fzg.x15dh256.x1t7u3xy.x1shw4ur.x6ikm8r.x10wlt62 + div {
                width: 90% !important;
            }
            div.x9f619.x78zum5.x1c4vz4f.x2lah0s.xdl72j9.xdt5ytf.xvue9z.x1xy6bms.xxbr6pl.xx6bls6.xbbxn1n.x1v8jjaa.xkwfhqy.x17e6fzg.x15dh256.x1t7u3xy.x1shw4ur.x6ikm8r.x10wlt62 {
                width: 90% !important;
            } 

            div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.xl56j7k.x1q0g3np.x6s0dn4.xvy4d1p.xxk0z11.x1pg5gke.x117nqv4 + div {
                padding: 0px !important;
            }
            div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.xl56j7k.x1q0g3np.x6s0dn4.xvy4d1p.xxk0z11.x1pg5gke.x117nqv4 {
                padding: 0px !important;
            } 

            div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.xl56j7k.x1q0g3np.x6s0dn4.xvy4d1p.xxk0z11 + div {
                padding: 0px !important;
            }
            div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.xl56j7k.x1q0g3np.x6s0dn4.xvy4d1p.xxk0z11 {
                padding: 0px !important;
            } 


            // image gallary more than 4 images
            div._amk4 + div {
               width: 70% !important;
            }
            div._amk4 {
               width: 70% !important;
            }

                        
            div.xh8yej3.x1qftm1w.xt7dq6l + div {
               zoom: 50% !important;
            }
            div.xh8yej3.x1qftm1w.xt7dq6l {
               zoom: 50% !important;
            }

 
            div.x1equxi.x1jjtzf3.x6ikm8r.x10wlt62.xrvj5dj.xn2kgx5 + div {
               width: auto !important;
               height: auto !important;
            }
            div.x1equxi.x1jjtzf3.x6ikm8r.x10wlt62.xrvj5dj.xn2kgx5 {
                width: auto !important;
               height: auto !important;
            }
 
            div.xyqdw3p.x10ogl3i.xg8j3zb.x1k2j06m.x1equxi + div {
               width: auto !important;
            }
            div.xyqdw3p.x10ogl3i.xg8j3zb.x1k2j06m.x1equxi {
                width: auto !important;
            }
  
            div._aml8 + div {
                display: grid !important;
                grid-template: repeat(2, 1fr)/repeat(2, 1fr) !important;
                width: max-content !important;
                height: auto !important;
            }
            div._aml8 {
                display: grid !important;
                grid-template: repeat(2, 1fr)/repeat(2, 1fr) !important;
                width: max-content !important;
                height: auto !important;
            }

            ._amlc {
                padding: 7px !important;
            }
                
            .x1k2j06m {
                padding-left: 7px !important;
            }
 
            .x10ogl3i {
                padding-right: 7px !important;
            }
 
            div._amk6._amlo._amlc._amld + div {
               width: 97% !important;
            }
            div._amk6._amlo._amlc._amld {
               width: 97% !important;
            }
 
            div._aml8._aml9 + div {
               zoom: 46% !important;
            }
            div._aml8._aml9 {
               zoom: 46% !important;
            }
 
            div.message-in.focusable-list-item._amjy._amjz._amjv._aotl._amjw._amj- + div {
               width: 96.5% !important;
            }
            div.message-in.focusable-list-item._amjy._amjz._amjv._aotl._amjw._amj- {
               width: 96.5% !important;
            }


            div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x1cy8zhl.x78zum5.x6s0dn4.x1qughib.xnnlda6.x1y1aw1k.xwib8y2.x1swvt13.x1pi30zi:has(> div.x78zum5.x6s0dn4.x1afcbsf) {
               align-items: baseline !important;
            }
            
            div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x1cy8zhl.x78zum5.x8d3tsl + div {
               min-width: auto !important;
            }
            div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x1cy8zhl.x78zum5.x8d3tsl {
               min-width: auto !important;
            }
            
            div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x13a6bvl.x1q0g3np.x1cy8zhl.x78zum5.x8d3tsl + div {
               min-width: auto !important;
            }
            div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x13a6bvl.x1q0g3np.x1cy8zhl.x78zum5.x8d3tsl {
               min-width: auto !important;
            }

            
            div.x78zum5.x6s0dn4.x1afcbsf:has(> div._ajv7.x1n2onr6.x1okw0bk.x5yr21d.x14yjl9h.xudhj91.x18nykt9.xww2gxu.xlkovuz.x16j0l1c.x17adc0v.xyklrzc.x1f9lq3s.xmbjyvj.xslj4r9.x1eez2cl.xo1qeri) {
               flex-wrap: wrap !important;
               width: 70% !important;
            }


            div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x6s0dn4.x1ypdohk.x1vqgdyp.x1i64zmx.x1gja9t {
                display: flex !important;
                flex-direction: row !important;
                justify-content: start !important;
            }

            .x1peuizl {
                width: 90% !important;
            }
            .xs8rnei {
                width: 100% !important;
            }
            .xvue9z {
                width: 100% !important;
            }


            
            div._ak4w._alox._as8u._ao_l + div {
               left: 0px !important;
               width: 90% !important;
               position-area: bottom !important;
            }
            div._ak4w._alox._as8u._ao_l {
               left: 0px !important;
               width: 90% !important;
               position-area: bottom !important;
            }



            // header and footer padding

            div.x1c4vz4f.x2lah0s.xdl72j9.xmn8rco + div {
               margin-left: 0px !important;
            }
            div.x1c4vz4f.x2lah0s.xdl72j9.xmn8rco {
               margin-left: 0px !important;
            }
            
            // div.x1n2onr6.x17adc0v + div {
            //    margin-left: 0px !important;
            // }
            // div.x1n2onr6.x17adc0v {
            //    margin-left: 0px !important;
            // }

            div.back_button + div {
               margin-left: 5px !important;
            }
            div.back_button {
               margin-left: 5px !important;
            }
            
            header.x1n2onr6.xfo81ep.x9f619.x78zum5.x6s0dn4.xh8yej3.x7j6532.x1pl83jw.x1j6awrg.x1te75w5.x162n7g1.x4eaejv.xcock1l.x1s928wv.xl9llhp.x1qj619r.x1r9ni5o.xvkby78.x889kno.x1a8lsjc.x1swvt13.x1pi30zi + div {
               padding-left: 5px !important;
               padding-right: 5px !important;
            }
            header.x1n2onr6.xfo81ep.x9f619.x78zum5.x6s0dn4.xh8yej3.x7j6532.x1pl83jw.x1j6awrg.x1te75w5.x162n7g1.x4eaejv.xcock1l.x1s928wv.xl9llhp.x1qj619r.x1r9ni5o.xvkby78.x889kno.x1a8lsjc.x1swvt13.x1pi30zi {
               padding-left: 5px !important;
               padding-right: 5px !important;
            }
            
            div.x1n2onr6.xhtitgo.x9f619.x78zum5.x1q0g3np.xuk3077.x193iq5w.x122xwht.x1bmpntp.xs9asl8.x1swvt13.x1pi30zi.xnpuxes.copyable-area + div {
               padding-left: 0px !important;
               padding-right: 0px !important;
            }
            div.x1n2onr6.xhtitgo.x9f619.x78zum5.x1q0g3np.xuk3077.x193iq5w.x122xwht.x1bmpntp.xs9asl8.x1swvt13.x1pi30zi.xnpuxes.copyable-area {
                padding-left: 0px !important;
                padding-right: 0px !important;
            }
            
            div.x9f619.x12lumcd.x1qrby5j.xeuugli.xisnujt.x6prxxf.x1fcty0u.x1fc57z9.xe7vic5.x1716072.xgde2yp.x89wmna.xbjl0o0.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x178xt8z.xm81vs4.xso031l.xy80clv.x1lq5wgf.xgqcy7u.x30kzoy.x9jhf4c.x1a2a7pz.x13w7htt.x78zum5.x96k8nx.xdvlbce.x1ye3gou.xn6708d.x1ok221b.xu06os2.x1i64zmx.x1emribx + div {
               margin-left: 5px !important;
               margin-right: 5px !important;
            }
            div.x9f619.x12lumcd.x1qrby5j.xeuugli.xisnujt.x6prxxf.x1fcty0u.x1fc57z9.xe7vic5.x1716072.xgde2yp.x89wmna.xbjl0o0.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x178xt8z.xm81vs4.xso031l.xy80clv.x1lq5wgf.xgqcy7u.x30kzoy.x9jhf4c.x1a2a7pz.x13w7htt.x78zum5.x96k8nx.xdvlbce.x1ye3gou.xn6708d.x1ok221b.xu06os2.x1i64zmx.x1emribx {
                margin-left: 5px !important;
                margin-right: 5px !important;
            }
            
            div.xjb2p0i.xk390pu.x1ypdohk.xjbqb8w.x972fbf.xcfux6l.x1qhh985.xm0m39n.xexx8yu.x4uap5.x18d9i69.xkhd6sd.xfect85.x100vrsf.x5kalc8.x78zum5.xl56j7k.x6s0dn4 + div {
                margin-left: 5px !important;
                margin-right: 5px !important;
            }
            div.xjb2p0i.xk390pu.x1ypdohk.xjbqb8w.x972fbf.xcfux6l.x1qhh985.xm0m39n.xexx8yu.x4uap5.x18d9i69.xkhd6sd.xfect85.x100vrsf.x5kalc8.x78zum5.xl56j7k.x6s0dn4 {
                margin-left: 5px !important;
                margin-right: 5px !important;
            }

            button.xjb2p0i.xk390pu.x1ypdohk.xjbqb8w.x972fbf.xcfux6l.x1qhh985.xm0m39n.x1okw0bk.x5yr21d.x14yjl9h.xudhj91.x18nykt9.xww2gxu.xlkovuz.xzwifym.x16j0l1c.xurb0ha.x1sxyh0.x96k8nx.xdvlbce + button {
               padding-right: 0% !important;
            }
            button.xjb2p0i.xk390pu.x1ypdohk.xjbqb8w.x972fbf.xcfux6l.x1qhh985.xm0m39n.x1okw0bk.x5yr21d.x14yjl9h.xudhj91.x18nykt9.xww2gxu.xlkovuz.xzwifym.x16j0l1c.xurb0ha.x1sxyh0.x96k8nx.xdvlbce {
               padding-right: 0% !important;
            }
            
            div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x2lwn1j.x1nhvcw1.x1q0g3np.x6s0dn4.x1ypdohk.x5w4yej.x1vqgdyp.xh8yej3 + div {
                justify-content: start !important;
            }
            div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x2lwn1j.x1nhvcw1.x1q0g3np.x6s0dn4.x1ypdohk.x5w4yej.x1vqgdyp.xh8yej3 {
                justify-content: start !important;
            }

            div._ak4w._ak4-._asag._ak59 + div {
               left: 0px !important;
               width: 90% !important;
               margin-left: 0px !important;
               position-area: bottom !important;
            }
            div._ak4w._ak4-._asag._ak59 {
               left: 0px !important;
               width: 90% !important;
               margin-left: 0px !important;
               position-area: bottom !important;
            }

            .x86nts4 {
                width: 77% !important;
            }



            div._ak4w._ak53._ak59 + div {
               left: 0px !important;
               width: 90% !important;
               margin-left: 0px !important;
               position-area: bottom !important;
            }
            div._ak4w._ak53._ak59 {
               left: 0px !important;
               width: 90% !important;
               margin-left: 0px !important;
               position-area: bottom !important;
            }

             div.x9f619.x78zum5.x1c4vz4f.x2lah0s.xdl72j9.xdt5ytf.x1xy6bms.xxbr6pl.xx6bls6.xbbxn1n.x1v8jjaa.xkwfhqy.x17e6fzg.x15dh256.x1t7u3xy.x1shw4ur.x6ikm8r.x10wlt62.x3p9ev8 + button {
               width: 90% !important;
            }
            div.x9f619.x78zum5.x1c4vz4f.x2lah0s.xdl72j9.xdt5ytf.x1xy6bms.xxbr6pl.xx6bls6.xbbxn1n.x1v8jjaa.xkwfhqy.x17e6fzg.x15dh256.x1t7u3xy.x1shw4ur.x6ikm8r.x10wlt62.x3p9ev8 {
                width: 90% !important;
            }


            canvas.x10l6tqk.xzkaem6.x1s85apg.x1qrby5j.x3igimt{
                max-width: 100% !important;
           }

           header.xd32934.x9f619.x78zum5.x1okw0bk.x6s0dn4.xl2dz39.xoj7uri.xpxdjtz.xexx8yu.x18d9i69.xc73u3c.x9mfa4r{
                height: max-content !important;
                padding-top: 10px !important;
                padding-bottom: 10px !important;
           }

           
           div.x9f619.x78zum5.x1c4vz4f.x2lah0s.xdl72j9.xdt5ytf.x1v8jjaa.xkwfhqy.x17e6fzg.x15dh256.x1t7u3xy.x1shw4ur.x6ikm8r.x10wlt62.x1n2onr6.xvue9z.x1egiwwb.xexx8yu.x4uap5.x18d9i69.xkhd6sd{
                width: 90% !important;
           }
        }
    `;

    document.head.appendChild(style); 
}

apply_style_rule()

// show hide chat div
// let isRemoved_chat = false; // Flag to track the state

// let parent_chat = mainDiv_chat.parentNode; // Parent of the div
// let nextSibling_chat = mainDiv_chat.nextSibling; // Next sibling to retain position

function toggleMainDiv_chat(isRemoved_chat) {
    console.log("toggleMainDiv_chat() : ", document.getElementById('main'));
        
    if (document.getElementById('main'))
    {
        let mainDiv_chat = document.getElementById('main').parentElement; // Original div
        console.log("mainDiv_chat : ", mainDiv_chat)
        if (!isRemoved_chat) {
            // Remove the div
            mainDiv_chat.style.setProperty('width', '0%', 'important');
            console.log('Div removed');
        } else {
            // Re-add the div
            mainDiv_chat.style.setProperty('width', '100%', 'important');
            console.log('Div added back');
        }
    }
}

function toggleMainDiv_list(isRemoved_list) {
    const allDivs_list = document.querySelectorAll('div[class*="_aigw"]'); // Get all matching divs
    console.log("Total matching divs:", allDivs_list.length);

    allDivs_list.forEach((div) => {
        if (!isRemoved_list) {
            // Hide the div
            div.style.setProperty('flex', '0 0%', 'important');
            div.style.setProperty('width', '0%', 'important');
            div.style.visibility = 'hidden';
        } else {
            // Show the div
            div.style.setProperty('flex', '0 100%', 'important');
            div.style.setProperty('width', '100%', 'important');
            div.style.visibility = 'visible';
        }
    });

    isRemoved_list = !isRemoved_list; // Toggle the state
    console.log(isRemoved_list ? 'All divs hidden' : 'All divs visible');
}

function addBackButton() {
    // Select the profile details icon
    console.log("addBackButton~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    const profileDetailsElement = document.querySelector('[title="Profile details"]');
    // Check if the element exists and get the parent header
    if (!profileDetailsElement) {
        console.log("Profile details element not found.");
        return;
    }
    console.log("addBackButton() : ", profileDetailsElement);
    const header = profileDetailsElement.parentElement;
    if (!header) {
        console.log("Header not found.");
        return;
    }

    // Check if the back button already exists in the header
    if (header.querySelector('.back_button')) {
        console.log("Back button already exists.");
        return;
    }

    // Create the back button container
    const backButton = document.createElement('div');
    backButton.setAttribute("role", "button");
    backButton.setAttribute("tabindex", "0");
    backButton.setAttribute("aria-label", "Return");
    backButton.classList.add("back_button"); // Added class name
    // Create the back button icon (SVG)
    const iconContainer = document.createElement('span');
    iconContainer.setAttribute("aria-hidden", "true");
    iconContainer.setAttribute("data-icon", "back");
    const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgIcon.setAttribute("viewBox", "0 0 24 24");
    svgIcon.setAttribute("height", "24");
    svgIcon.setAttribute("width", "24");
    svgIcon.setAttribute("preserveAspectRatio", "xMidYMid meet");
    const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
    title.textContent = "back";
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill", "currentColor");
    path.setAttribute("d", "M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z");
    svgIcon.appendChild(title);
    svgIcon.appendChild(path);
    iconContainer.appendChild(svgIcon);
    // Insert the icon into the back button
    backButton.appendChild(iconContainer);
    // Add an event listener for the back button
    backButton.addEventListener('click', () => {
        console.log("Back");
        backToHome(10);   // here is added because on back i want to close checkbox list button
        console.log("&&&&openUserList&&&&&&");
        openUserList();
    });
    // Insert the back button as the first child of the header
    header.insertBefore(backButton, header.firstChild);
    console.log("addBackButton~~~~~~~~~~~~~~~~~~~~~END~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
}


function backToHome(intervalTime = 10)
{
    const clickedButtons = new Set(); // Store already clicked buttons

    const interval = setInterval(() => {
        const buttons = document.querySelectorAll('[type="button"][title="Cancel forward"],[role="button"][aria-label="Cancel selection"],[role="button"][aria-label="Back"], [role="button"][aria-label="Close"]');
        console.log("Buttons found: ", buttons);

        let newClick = false; // Track if any new button was clicked

        buttons.forEach(button => {
            if (!clickedButtons.has(button)) { // Check if the button was not clicked before
                button.dispatchEvent(new Event('click', { bubbles: true }));
                clickedButtons.add(button); // Mark button as clicked
                newClick = true;
            }
        });

        // Stop the interval if no new buttons were clicked
        if (!newClick) {
            clearInterval(interval);
            console.log("No new 'Back' or 'Close' buttons found. Stopping interval.");
        }
    }, intervalTime); // Runs every 1 second
}

function getNearestElement(target, selector) {

    // If not found inside, check the closest ancestor
    closetTarget =  target.closest(selector);
    if (closetTarget) {
        return closetTarget;
    }
    else{
     let innerListItem = target.querySelector(selector);
     if (innerListItem) {
         return innerListItem; // Return the inner one if found
     }
    }
 
    return null;
}

let last_event_click = {};
const RETRY_COUNT = 2;
function list_item_event_listener() {
    document.addEventListener("click", function(event) {
        const followButton = event.target.closest('button.xjb2p0i.xk390pu.x1heor9g.x1ypdohk.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x9f619.xlwc9sh.x178xt8z.xm81vs4.xso031l.xy80clv.xiuubft.xa2vszz.xx5tys9.x5iuykv.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.xfkn95n.xly138o.xchwasx.xfxlei4.xv52azi');
        const listItem = getNearestElement(event.target, 'div[role="listitem"]:not(:has([data-emoji]))');
        // const button = getNearestElement(event.target, 'button[aria-disabled="false"][role="button"]');
        const button = getNearestElement(event.target, 'div[aria-disabled="false"][role="button"], button[aria-disabled="false"][role="button"],li[role="button"]:has(div[aria-label="Community info"])');
        const checkboxButton = document.querySelector('input.x10l6tqk.x1i1rx1s.xjm9jq1.x6ikm8r.x10wlt62.xeh89do.x1hyvwdk.xuxw1ft');
        
        if (followButton) {
            console.log("if !!!!!!!!!!!!!!!!!!!!follow_button!!!!!!!!!!!!!!!!!!!! ---- ", followButton);
            return;
        }
        else 
        {
            console.log("^^^^^^^^checkboxButton ======= ", checkboxButton);
            if (checkboxButton)
            {
                console.log("^^^^^^^^checkboxButton.type ======= ", checkboxButton.type);
                
            }
            console.log("^^^^^^^^button ======= ", button);

            if (checkboxButton && checkboxButton.type === "checkbox" && (button == undefined || button == null)) {
                console.log("checkboxButton ======= ", checkboxButton);
                return;
            }
            else{                
                console.log("if !!!!!!!!!!!!!!!!!!!!event.target!!!!!!!!!!!!!!!!!!!! ---- ", event.target);
                console.log("if !!!!!!!!!!!!!!!!!!!!listItem!!!!!!!!!!!!!!!!!!!! ---- ", listItem);
                console.log("if !!!!!!!!!!!!!!!!!!!!!!button!!!!!!!!!!!!!!!!!! ---- ", button);
                
                if (listItem) {
                    console.log("listItem ======= ", listItem);
                    const matchingElement = listItem.querySelector('[aria-label]');
                    
                    console.log("matchingElement ======= ", matchingElement);
                    const matchingLabelElement = listItem.querySelector('div.x9f619.x4f6e3x.x1jchvi3.x1n68mz9.x9orja2.x4uap5.xohmsfg.x1xfsgkm.xtvhhri.xjbqb8w');
                    const svgElement = listItem.querySelector('svg.x139jcc6.x1rdy4ex.x10l6tqk');
                    console.log("svgElement ======= ", svgElement);

                    console.log("matchingLabelElement ======= ", matchingLabelElement);

                    if (matchingElement != undefined || matchingLabelElement != undefined || svgElement != undefined) {
                        
                        const ariaLabel = (matchingElement ? matchingElement.getAttribute('aria-label') : "");
                        const textContent = (matchingLabelElement ? matchingLabelElement.textContent.trim() : "");

                        console.log("matchingElement ======= ", matchingElement);
                        console.log("ariaLabel ======= ", ariaLabel);                        
                        console.log("textContent ======= ", textContent);     
                        
                        if (ariaLabel.includes("View all subgroups in") || ariaLabel.includes("Community:") || ariaLabel.includes("Create new community")) {
                            console.log("Match found:", matchingElement);
                            // Do something if the condition is met
                            return;
                        }

                        if (matchingLabelElement != undefined) {
                            return;
                        }
                        if (svgElement != undefined) {
                            return;
                        }
                    }
            
                    console.log("else!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                    openChat(); // Uncomment if needed
                } 
                else if (button) {
                    const label = button.getAttribute("aria-label") || button.querySelector('[aria-label]')?.getAttribute('aria-label');           
                    console.log("btn label ======= ", label);
                    const buttonActions = {
                        "Chats": () => {                    
                            backToHome(10);

                            const btn = document.querySelector('button[aria-disabled="false"][role="button"][aria-label="Chats"]');
                            if (btn) {
                                btn.dispatchEvent(new Event('click', { bubbles: true }));
                                console.log("Triggered click event on 'Chats' button.");
                            }
                            console.log("Chats clicked ^^^^^^^^^^^^^^^^^^^^^^^");
                            openUserList();
                        },
                        "Status": () => {    
                            backToHome(10)

                            const btn = document.querySelector('button[aria-disabled="false"][role="button"][aria-label="Status"]');
                            console.log(last_event_click[label]," : Status button ################  ======= ", btn);
                            if (btn) {
                                btn.dispatchEvent(new Event('click', { bubbles: true }));
                                console.log("Triggered click event on 'Status' button.");
                            }
                            console.log("Status clicked ^^^^^^^^^^^^^^^^^^^^^^^");
                            openUserList();
                        },
                        "Channels": () => {
                            backToHome(10);

                            const btn = document.querySelector('button[aria-disabled="false"][role="button"][aria-label="Channels"]');
                            if (btn) {
                                btn.dispatchEvent(new Event('click', { bubbles: true }));
                                console.log("Triggered click event on 'Channels' button.");
                            }
                            console.log("Channels clicked ^^^^^^^^^^^^^^^^^^^^^^^");
                            openUserList();
                        },
                        "Communities": () => {
                            backToHome(10);

                            const btn = document.querySelector('button[aria-disabled="false"][role="button"][aria-label="Communities"]');
                            if (btn) {
                                btn.dispatchEvent(new Event('click', { bubbles: true }));
                                console.log("Triggered click event on 'Communities' button.");
                            }
                            console.log("Communities clicked ^^^^^^^^^^^^^^^^^^^^^^^");
                            openUserList();
                        },
                        "Meta AI": () => {
                            backToHome(10);

                            const btn = document.querySelector('button[aria-disabled="false"][role="button"][aria-label="Meta AI"]');
                            if (btn) {
                                btn.dispatchEvent(new Event('click', { bubbles: true }));
                                console.log("Triggered click event on 'Meta AI' button.");
                            }
                            console.log("Meta AI clicked ^^^^^^^^^^^^^^^^^^^^^^^");
                            openChat();

                            // setTimeout(openChat, 200);
                        },
                        "Settings": () => {
                            backToHome(10);

                            const btn = document.querySelector('button[aria-disabled="false"][role="button"][aria-label="Settings"]');
                            if (btn) {
                                btn.dispatchEvent(new Event('click', { bubbles: true }));
                                console.log("Triggered click event on 'Settings' button.");
                            }
                            console.log("Settings clicked ^^^^^^^^^^^^^^^^^^^^^^^");
                            openUserList();
                        },
                        "Profile": () => {
                            backToHome(10);

                            const btn = document.querySelector('button[aria-disabled="false"][role="button"][aria-label="Profile"]');
                            if (btn) {
                                btn.dispatchEvent(new Event('click', { bubbles: true }));
                                console.log("Triggered click event on 'Profile' button.");
                            }
                            console.log("Profile clicked ^^^^^^^^^^^^^^^^^^^^^^^");
                            openUserList();
                        },
                        "BETA": () => {
                            backToHome(10);

                            const btn = document.querySelector('button[aria-disabled="false"][role="button"][aria-label="BETA"]');
                            if (btn) {
                                btn.dispatchEvent(new Event('click', { bubbles: true }));
                                console.log("Triggered click event on 'BETA' button.");
                            }
                            console.log("BETA clicked ^^^^^^^^^^^^^^^^^^^^^^^");
                            openUserList();
                        },
                        "Add group": () => {
                            // backToHome(10);

                            // const btn = document.querySelector('div[aria-disabled="false"][role="button"][aria-label="Add group"]');
                            // if (btn) {
                            //     btn.dispatchEvent(new Event('click', { bubbles: true }));
                            //     console.log("Triggered click event on 'Add group' button.");
                            // }
                            console.log("Add group clicked ^^^^^^^^^^^^^^^^^^^^^^^");
                            openUserList();
                        },
                        "View community": () => {
                            // backToHome(10);

                            // const btn = document.querySelector('div[aria-disabled="false"][role="button"][aria-label="View community"]');
                            // if (btn) {
                            //     btn.dispatchEvent(new Event('click', { bubbles: true }));
                            //     console.log("Triggered click event on 'View community' button.");
                            // }
                            console.log("View community clicked ^^^^^^^^^^^^^^^^^^^^^^^");
                            openUserList();
                        },
                        "Community info": () => {
                            // backToHome(10);

                            // const btn = document.querySelector('div[aria-disabled="false"][role="button"][aria-label="View community"]');
                            // if (btn) {
                            //     btn.dispatchEvent(new Event('click', { bubbles: true }));
                            //     console.log("Triggered click event on 'View community' button.");
                            // }
                            console.log("Community info clicked ^^^^^^^^^^^^^^^^^^^^^^^");
                            openChat();
                        }
                    };
            
                    if (buttonActions[label]) {
                        console.log(label, "!!!!!!!!!!! last_event_click!!!!!!!!!!!!", last_event_click[label]);
                        
                        if (last_event_click[label] === undefined || last_event_click[label] < RETRY_COUNT) {                    
                            last_event_click[label] = (last_event_click[label] || 0) + 1; // Ensuring increment works properly
                            buttonActions[label]();
                        }
                        else {
                            last_event_click[label] = 0
                        }
                    }
                    
                }
            }
        }
    });

    const observer = new MutationObserver((mutationsList) => {
        const tooltip = document.querySelector('div[role="tooltip"]');
        if (tooltip) {
            tooltip.remove();
            console.log("Tooltip removed.");            
        }

        let get_window_element = document.querySelector('div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1qughib.x1q0g3np.x6s0dn4.xz9dl7a.x1a8lsjc.x10l6tqk.x1ey2m1c.xoz0ns6.xh8yej3.x150wa6m.x178xt8z.x13fuv20.xyj1x25');;
        if (get_window_element) {
            get_window_element.remove();
            console.log("Removed get_window_element element");
        }

        const button = document.querySelector('button[title="Get the app for calling"]');
        if (button) {
            button.closest('div.x1n2onr6')?.remove(); // Remove the entire div containing the button
            console.log("Removed: 'Get the app for calling' button");
        }

        const hrElement = document.querySelector('hr.xd10rxx.x1sy0etr.x17r0tee');
        if (hrElement) {
            hrElement.remove();
            console.log("Removed: Specific <hr> element");
        }
        
        document.querySelectorAll('li[role="button"]').forEach(li => {
            const div = li.querySelector('div[aria-label="Get WhatsApp for Windows"]');
            if (div && div.textContent.trim() === "Get WhatsApp for Windows") {
                li.remove();
                console.log("Removed: 'Get WhatsApp for Windows' list item");
            }
        });

        document.querySelectorAll('button[role="listitem"]').forEach(button => {
            const textElement = button.querySelector('div.x1lkfr7t');
            if (textElement && textElement.textContent.trim() === "Keyboard shortcuts") {
                button.remove();
                console.log("Removed: 'Keyboard shortcuts' button");
            }
        });
        
        document.querySelectorAll('div._ak4w._alox._as8u._ao_l').forEach(div => {
            if (div.style.bottom) {
                div.style.removeProperty('bottom');
                console.log("Removed 'bottom' style from the element.");
            }
        });

        document.querySelector('div[title="WhatsApp Sticker Store"]')?.remove();

        document.querySelectorAll('.x1n2onr6.x17adc0v').forEach(div => {
            if (div.querySelector('title')?.textContent.trim().toLowerCase() === "menu") {
                div.style.marginLeft = "0px";
            }
        });

        
        for (const mutation of mutationsList) {
            for (const addedNode of mutation.addedNodes) {
                if (addedNode.querySelector('[title="Profile details"]')) {
                    addBackButton();
                }
            }
        }

        makeWhatsAppWebResponsive()
    });
    
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('resize', makeWhatsAppWebResponsive);
    
    document.addEventListener('click', function (event) {
        let button = event.target.closest('button');
        if (button && button.innerText.trim() === 'Delete chat') {
            openUserList();
        }
    });

    document.addEventListener('click', function (event) {
        let liButton = event.target.closest('li[role="button"]');
        if (liButton && liButton.querySelector('div[aria-label="Close chat"]')) {
            openUserList();
        }
    });
}


let isChatBoxPage = false;
function openUserList()
{   console.log("~~~~~~~~~~~~~openUserList~~~~~~~~~~~~~");
    isChatBoxPage = false
    toggleMainDiv_chat(false)
    toggleMainDiv_list(true)
    
}

function openChat()
{
    console.log("~~~~~~~~~~~~~openChat~~~~~~~~~~~~~");
    isChatBoxPage = true
    toggleMainDiv_chat(true)
    toggleMainDiv_list(false)
    
    setTimeout(addBackButton, 50);
    let count = 0;
    // const interval = setInterval(() => {
    //     addBackButton();
    //     count++;
    //     if (count >= 5) clearInterval(interval); // Stop after 2 more calls
    // }, 1000); // Call every 300ms
}

function makeWhatsAppWebResponsive() {
    // Apply global styles for better mobile responsiveness
    document.body.style.zoom = '0.9';
    document.body.style.overflowX = 'hidden';
    document.body.style.width = '50%';

    // Adjust main container width and padding
    const mainContainer = document.querySelector('.xp9ttsr');
    if (mainContainer) {
        mainContainer.style.width = '95%';
        mainContainer.style.maxWidth = '450px';
        mainContainer.style.margin = 'auto';
        mainContainer.style.padding = '10px';
        mainContainer.style.minHeight = '1000px';
    }
    const Container = document.querySelector('.x120dzms');
    if (Container) {           
        Container.style.padding = '10px';
    }
    
    const textFieldContainer = document.querySelector('.x1m258z3');
    if (textFieldContainer) {           
        textFieldContainer.style.width = 'auto';
    }
    
    const container = document.querySelector('.xp9ttsr');
    if (container) {           
        container.style.minWidth = '300px';
    }

    // Adjust QR Code size
    const qrCanvas = document.querySelector('canvas');
    if (qrCanvas) {
        qrCanvas.style.width = '100%';
        qrCanvas.style.maxWidth = '300px';
        qrCanvas.style.height = 'auto';
        qrCanvas.style.display = 'block';
        qrCanvas.style.margin = 'auto';
        
    }
    const qrcode = document.querySelector('.x8vdgqj');
    if(qrcode) {
        qrcode.style.marginLeft = '0px';
    }

    // Modify instruction text size and alignment
    const instructions = document.querySelector('.x1c3i2sq');
    if (instructions) {
        instructions.style.fontSize = '14px';
        instructions.style.textAlign = 'center';
        instructions.style.padding = '10px';
    }

    // Modify the login options (phone number login) for better mobile experience
    const loginOptions = document.querySelector('div._3o12g');
    if (loginOptions) {
        loginOptions.style.display = 'flex';
        loginOptions.style.flexDirection = 'column';
        loginOptions.style.alignItems = 'center';
    }

    // Adjust header and download button for better alignment
    const header = document.querySelector('.x1q0g3np');
    if (header) {
        header.style.display = 'flex';
        header.style.flexDirection = 'row';
        header.style.justifyContent = 'center';
        // header.style.padding = '10px';        
    }
    const headerButton = document.querySelector('.xsrozwr');
    if (headerButton) {
        headerButton.style.display = 'none';   
    }

    const downloadButton = document.querySelector('a._3z3lc');
    if (downloadButton) {
        downloadButton.style.padding = '8px 12px';
        downloadButton.style.fontSize = '14px';
    }

}

function patch() {
    //it will use to resolve the issue regarding status click on first time.
    const observer = new MutationObserver((mutations, obs) => {
        const btnStatus = document.querySelector('button[aria-disabled="false"][role="button"][aria-label="Status"]');
        if (btnStatus) {
            obs.disconnect(); // Stop observing after first trigger
            btnStatus.dispatchEvent(new Event('click', { bubbles: true }));
            console.log("Triggered click event on 'Status' button.@@@@@@@@@@@@@@@@@");

            setTimeout(() => {
                const btnChats = document.querySelector('button[aria-disabled="false"][role="button"][aria-label="Chats"]');
                if (btnChats) {
                    btnChats.dispatchEvent(new Event('click', { bubbles: true }));
                    console.log("Triggered click event on 'Chats' button@@@@@@@@@@@@@@@.");
                    
                    // list_item_event_listener()
                }           
            }, 10);
            
        }
        
    });
    
    // Start observing the document body for changes
    observer.observe(document.body, { childList: true, subtree: true });
}
function start() {
    makeWhatsAppWebResponsive()
    patch()   
    list_item_event_listener()
}

start()
