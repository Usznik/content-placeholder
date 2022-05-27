const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const name = document.getElementById('name');
const date = document.getElementById('date');
const animated_bg = document.querySelectorAll('.animated-bg');
/**The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned. */
/*The Document method querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors. */
setTimeout(getData ,2500); // time for 2,5  sec
function getData()
{
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1504593811423-6dd665756598?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170" alt=""></img>';
    title.innerHTML = "Lorem ipsum";
    excerpt.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tincidunt risus.";
    name.innerHTML = "John Doe";
    date.innerHTML = "May 27 2022";
    animated_bg.forEach(bg => bg.classList.remove('animated-bg'));
}