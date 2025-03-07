import { SideBar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';
import { ButtonNextAndPreviousPage } from '@/components/ButtonNextAndPreviousPage';
import { Albuns } from '@/components/Albuns';
import { MadeFor } from '@/components/MadeFor';
import { useTranslations } from 'next-intl';

export default function Home() {
    const t = useTranslations('Home');

    return (
        <div className="h-screen flex flex-col relative">
            <div className="flex flex-1">
                <SideBar />
                <main className="flex-1 p-6 bg-black-400">
                    <ButtonNextAndPreviousPage />

                    <h1 className="font-bold text-white text-3xl mt-10">
                        {t('h1')}
                    </h1>

                    <Albuns />

                    <h2 className="font-bold text-white text-xl mt-10">
                        {t('h2')}
                    </h2>

                    <MadeFor />
                </main>
            </div>
            <Footer />
        </div>
    );
}
