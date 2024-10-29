<script lang="ts">
    import { register } from "../firebase/auth";
    import axios from "axios";

    interface Props {
        email: string;
        password: string;
        username: string;
    }

    let { email, password, username }: Props = $props();

    const handleRegister = async () => {
        try {
            const userCredential = await register(email, password);
            const uid = userCredential.user.uid;
            
            const response = await axios.post("/api/users", {
                uid,
                username,
                email,
                password,
                role: "user",
            });

            console.log("✅ Success:", response.data);


        } catch (error) {
            console.log("❌ Error:", error);
        }
    }

</script>

<button class="btn btn-primary" onclick={handleRegister}>Sign Up</button>
