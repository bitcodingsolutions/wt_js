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

            // Chat
            div._amk4._amkm + div {
               width: 80% !important;
            }
            div._amk4._amkm {
               width: 80% !important;
            }
            // pdf community chat
            div.x9f619.x1u9i22x.xjcl138.x1gwem2t.x1idk2jd.x1yuel0x + div {
                width: auto !important;
            }
            div.x9f619.x1u9i22x.xjcl138.x1gwem2t.x1idk2jd.x1yuel0x {
                width: auto !important;
            }
                
            
            // video link chat
            
            div._amk4._aml5 + div {
               width: 80% !important;
            }
            div._amk4._aml5 {
               width: 80% !important;
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
            
            
            // community chat
            
            div._amk4._amkm._amk5 + div {
               width: 80% !important;
            }
            div._amk4._amkm._amk5 {
               width: 80% !important;
            }
            
            div._amk4._amkd + div {
               width: 80% !important;
            }
            div._amk4._amkd {
               width: 80% !important;
            }
            
            div.x9f619.x1hx0egp.x1yuel0x.x1yrsyyn.x1sxyh0.xwib8y2.xohu8s8 + div {
                width: auto !important;
            }
            div.x9f619.x1hx0egp.x1yuel0x.x1yrsyyn.x1sxyh0.xwib8y2.xohu8s8 {
                width: auto !important;
            }
            
            div._amk4._amkt + div {
                width: 70% !important;
            }
            div._amk4._amkt {
                width: 70% !important;
            }

            div._amk4._amkv + div {
               width: 80% !important;
            }
            div._amk4._amkv {
               width: 80% !important;
            }

            // youtube link
            div._amk4._aml6 + div {
                width: 70% !important;
            }
            div._amk4._aml6 {
                width: 70% !important;
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

            div._amk4._amkd._amlv + div {
                width: 70% !important;
            }
            div._amk4._amkd._amlv {
                width: 70% !important;
            }

            div.x9f619.x1hx0egp.x1yuel0x.x1yrsyyn.xpr8y4f.x18d9i69.x1yzk5dy + div {
                width: auto !important;
            }
            div.x9f619.x1hx0egp.x1yuel0x.x1yrsyyn.xpr8y4f.x18d9i69.x1yzk5dy {
                width: auto !important;
            }

            div._amk4._amkd._amkj._amk5 + div {
                width: auto !important;
            }
            div._amk4._amkd._amkj._amk5 {
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

            // contact share in chat
            div._amk4._amks._amk5 + div {
                width: 90% !important;
            }
            div._amk4._amks._amk5 {
                width: 80% !important;
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
            // mainDiv_chat.remove();
            // isRemoved_chat = true;
            mainDiv_chat.style.setProperty('width', '0%', 'important');
            console.log('Div removed');
        } else {
            // Re-add the div
            // parent_chat.insertBefore(mainDiv_chat, nextSibling_chat);
            // isRemoved_chat = false;
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
    backButton.setAttribute("aria-label", "Back");
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
        openUserList();
    });
    // Insert the back button as the first child of the header
    header.insertBefore(backButton, header.firstChild);
    console.log("addBackButton~~~~~~~~~~~~~~~~~~~~~END~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
}

let last_event_click = {};
const RETRY_COUNT = 5;
function list_item_event_listener() {

    document.addEventListener("click", function(event) {
        const listItem = event.target.closest('div[role="listitem"]');
        const button = event.target.closest('button[aria-disabled="false"][role="button"]');
    
        if (listItem) {
            console.log("listItem ======= ", listItem);
            const matchingElement = listItem.querySelector('[aria-label]');
            console.log("matchingElement ======= ", matchingElement);
            if (matchingElement) {
                const ariaLabel = matchingElement.getAttribute('aria-label');
                console.log("matchingElement ======= ", matchingElement);
                console.log("ariaLabel ======= ", ariaLabel);
    
                if (ariaLabel.includes("View all subgroups in") || ariaLabel.includes("Community:") || ariaLabel.includes("Create new community")) {
                    console.log("Match found:", matchingElement);
                    // Do something if the condition is met
                    return;
                }
            }
    
            console.log("else");
            openChat(); // Uncomment if needed
        } 
        else if (button) {
            const label = button.getAttribute("aria-label");           

            const buttonActions = {
                "Chats": () => {
                    document.querySelectorAll('[role="button"][aria-label="Back"], [role="button"][aria-label="Close"]').forEach(button => {
                        button.dispatchEvent(new Event('click', { bubbles: true }));
                    });

                    const btn = document.querySelector('button[aria-disabled="false"][role="button"][aria-label="Chats"]');
                    if (btn) {
                        btn.dispatchEvent(new Event('click', { bubbles: true }));
                        console.log("Triggered click event on 'Chats' button.");
                    }
                    console.log("Chats clicked ^^^^^^^^^^^^^^^^^^^^^^^");
                    openUserList();
                },
                "Status": () => {   
                    document.querySelectorAll('[role="button"][aria-label="Back"], [role="button"][aria-label="Close"]').forEach(button => {
                        button.dispatchEvent(new Event('click', { bubbles: true }));
                    });

                    const btn = document.querySelector('button[aria-disabled="false"][role="button"][aria-label="Status"]');
                    if (btn) {
                        btn.dispatchEvent(new Event('click', { bubbles: true }));
                        console.log("Triggered click event on 'Status' button.");
                    }
                    console.log("Status clicked ^^^^^^^^^^^^^^^^^^^^^^^");
                    openUserList();
                },
                "Channels": () => {
                    document.querySelectorAll('[role="button"][aria-label="Back"], [role="button"][aria-label="Close"]').forEach(button => {
                        button.dispatchEvent(new Event('click', { bubbles: true }));
                    });

                    const btn = document.querySelector('button[aria-disabled="false"][role="button"][aria-label="Channels"]');
                    if (btn) {
                        btn.dispatchEvent(new Event('click', { bubbles: true }));
                        console.log("Triggered click event on 'Channels' button.");
                    }
                    console.log("Channels clicked ^^^^^^^^^^^^^^^^^^^^^^^");
                    openUserList();
                },
                "Communities": () => {
                    document.querySelectorAll('[role="button"][aria-label="Back"], [role="button"][aria-label="Close"]').forEach(button => {
                        button.dispatchEvent(new Event('click', { bubbles: true }));
                    });

                    const btn = document.querySelector('button[aria-disabled="false"][role="button"][aria-label="Communities"]');
                    if (btn) {
                        btn.dispatchEvent(new Event('click', { bubbles: true }));
                        console.log("Triggered click event on 'Communities' button.");
                    }
                    console.log("Communities clicked ^^^^^^^^^^^^^^^^^^^^^^^");
                    openUserList();
                },
                "Meta AI": () => {
                    document.querySelectorAll('[role="button"][aria-label="Back"], [role="button"][aria-label="Close"]').forEach(button => {
                        button.dispatchEvent(new Event('click', { bubbles: true }));
                    });

                    const btn = document.querySelector('button[aria-disabled="false"][role="button"][aria-label="Meta AI"]');
                    if (btn) {
                        btn.dispatchEvent(new Event('click', { bubbles: true }));
                        console.log("Triggered click event on 'Meta AI' button.");
                    }
                    console.log("Meta AI clicked ^^^^^^^^^^^^^^^^^^^^^^^");
                    openChat();
                },
                "Settings": () => {
                    document.querySelectorAll('[role="button"][aria-label="Back"], [role="button"][aria-label="Close"]').forEach(button => {
                        // button.dispatchEvent(new Event('click', { bubbles: true }));
                        button.dispatchEvent(new Event('click', { bubbles: true }));
                    });

                    const btn = document.querySelector('button[aria-disabled="false"][role="button"][aria-label="Settings"]');
                    if (btn) {
                        btn.dispatchEvent(new Event('click', { bubbles: true }));
                        console.log("Triggered click event on 'Settings' button.");
                    }
                    console.log("Settings clicked ^^^^^^^^^^^^^^^^^^^^^^^");
                    openUserList();
                },
                "Profile": () => {
                    document.querySelectorAll('[role="button"][aria-label="Back"], [role="button"][aria-label="Close"]').forEach(button => {
                        button.dispatchEvent(new Event('click', { bubbles: true }));
                    });

                    const btn = document.querySelector('button[aria-disabled="false"][role="button"][aria-label="Profile"]');
                    if (btn) {
                        btn.dispatchEvent(new Event('click', { bubbles: true }));
                        console.log("Triggered click event on 'Profile' button.");
                    }
                    console.log("Profile clicked ^^^^^^^^^^^^^^^^^^^^^^^");
                    openUserList();
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
    });

    const observer = new MutationObserver(() => {
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

        document.querySelectorAll('div.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x1nhvcw1.x1q0g3np.x9f619.x1iyjqo2.x1qjc9v5.x879a55.x1jwue9u.x1dcx0tz')
        .forEach(el => {
            if (el.innerText.includes("Keyboard shortcuts")) {
                el.remove();
            }
        });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('resize', makeWhatsAppWebResponsive);
}

function openUserList()
{   
    toggleMainDiv_chat(false)
    toggleMainDiv_list(true)
}

function openChat()
{
    toggleMainDiv_chat(true)
    toggleMainDiv_list(false)
    setTimeout(addBackButton, 50);
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
        header.style.padding = '10px';        
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

    // Fix layout for screens smaller than 600px
    if (window.innerWidth < 600) {
        document.body.style.zoom = '1';
        document.body.style.padding = '10px';

        if (mainContainer) {
            mainContainer.style.width = '100%';
            mainContainer.style.maxWidth = '100%';
        }
    }
}

makeWhatsAppWebResponsive()
list_item_event_listener()
