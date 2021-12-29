import React from 'react';
import NextLink from 'next/link';
interface Props {
    className?: string;
    target?: string;
    href: string;
}
const Link = (props: React.PropsWithChildren<Props>) => {
    if (!props.children) {
        return null;
    }

    return (
        <NextLink {...props}>
            <a {...props}>{props.children}</a>
        </NextLink>
    );
};

export { Link };
