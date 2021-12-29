import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
    const router = useRouter();
    useEffect(() => {
        router.push({
            pathname: `/`,
        });
    });
    return <div className="text-center"></div>;
}
