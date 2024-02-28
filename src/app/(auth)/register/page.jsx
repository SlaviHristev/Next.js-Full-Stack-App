import styles from './register.module.css'
import { register } from "@/lib/actions";

const Register = () => {
    return <div className={styles.container}>
      <div className={styles.wrapper}>

      <form className={styles.form} action={register}>
        <input type="text" placeholder="username" name="username" />
        <input type="email" placeholder="email" name="email" />
        <input type="password" placeholder="passowrd" name="password" />
        <input type="password" placeholder="repeat password" name="passwordRepeat" />
        <button>Register</button>
      </form>
      </div>
    </div>;
  };
  
  export default Register;