
import Link from 'next/link';

const VeryBasicMenu = () => {
    return (
        <div>
            <Link href='/'>Home</Link>
            { `  |  `}
            <Link href='/normal'>Normal</Link>
            { `  |  `}
            <Link href='/readMe'>Read Me</Link>
            { `  |  `}
            <Link href='/test'>Test</Link>                
        </div>
    );
};

export default VeryBasicMenu;