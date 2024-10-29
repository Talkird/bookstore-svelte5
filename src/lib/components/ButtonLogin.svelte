<script lang="ts">

    interface Props {
        email: string;
        password: string;
    }

    let { email, password }: Props = $props();
    import { login } from "../firebase/auth";
</script>

<button class="btn btn-primary" onclick={() => login(email, password)}>Login</button>
