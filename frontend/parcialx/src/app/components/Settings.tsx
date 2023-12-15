"use client"

import Link from 'next/link';
import { useSession } from 'next-auth/react';

const Settings = ({ id }: { id: string }) => {
    const { data: session } = useSession();

    if (session?.user?.id === id)
        return (<div className="flex flex-col justify-center mt-4">
            <Link href={`/user/settings/new-photo`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
                Add new photo
            </Link>
            <Link href={`/user/settings/change-name`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
                Change username
            </Link>
            <Link href={`/user/settings/change-location`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Change user location
            </Link>
        </div>
        );
        else return (<></>);
};

export default Settings;