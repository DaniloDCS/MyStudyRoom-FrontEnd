import { Form } from "@unform/web";
import { Input } from "./form/Input";
import { Label } from "./form/Label";

const API = import.meta.env.VITE_API_URL;

export function SignIn() {
  
  function handleSubmit(data: any) {
    console.log(JSON.stringify(data));
    fetch(`${API}account/signIn`, {
      method: "POST",
      mode: "no-cors",
      headers: new Headers({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://apimystudyroom.herokuapp.com/"
      }),
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div>
      <h1>Access your account</h1>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label text="Email" htmlFor="username" />
          <br />
          <Input
            name="username"
            id="username"
            type="text"
            placeholder="Enter the username or email"
          />
        </div>
        <div>
          <Label text="Password" htmlFor="password" />
          <br />
          <Input
            name="password"
            id="password"
            type="password"
            placeholder="Enter the password"
          />
        </div>
        <button type="submit">Sign In</button>
      </Form>
    </div>
  );
}
