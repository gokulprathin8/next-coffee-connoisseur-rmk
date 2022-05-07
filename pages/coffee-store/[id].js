import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeStore = () => {
    const router = useRouter();
    console.log(router, router.query.id);
    return <div>
        <div>Coffee Store</div>
        <Link href="/" scroll={false}>Back to home</Link>
        <Link href="/coffee-store/1" scroll={false}>Go to a dynamic page</Link>
    </div>
}

export default CoffeeStore;