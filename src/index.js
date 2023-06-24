import "./styles.css";

document.getElementById("app").innerHTML = `
<form>
<div>
<label for="name">Name:</label>

<input type="text" name="name" id="name"/>
</div>
<div>
<label for="email">Email:</label>

<input type="email" name="email" id="email"/>
</div>
<div>
<label for="message">Message:</label>

<input type="text" name="message" id="message"/>
</div>
<button>Submit</button>
</form>
`;
