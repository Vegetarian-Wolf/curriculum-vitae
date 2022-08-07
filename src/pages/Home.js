import React, { Suspense, lazy } from 'react';
import Water from '../components/Water';

import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';

const Wood = lazy(() => import('../components/Wood'));
const Fire = lazy(() => import('../components/Fire'));
const Earth = lazy(() => import('../components/Earth'));
const Metal = lazy(() => import('../components/Metal'));


const Home = () => {
    return (
        <Fullpage>
            <FullpageNavigation />
            <FullPageSections>
                <FullpageSection>
                    <Water />
                </FullpageSection>

                <FullpageSection>
                    <Suspense fallback={null}> <Wood /> </Suspense>
                </FullpageSection>

                <FullpageSection>
                    <Suspense fallback={null}> <Fire /> </Suspense>
                </FullpageSection>

                <FullpageSection>
                    <Suspense fallback={null}> <Earth /> </Suspense>
                </FullpageSection>

                <FullpageSection>
                    <Suspense fallback={null}> <Metal /> </Suspense>
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
    )
}

export default Home