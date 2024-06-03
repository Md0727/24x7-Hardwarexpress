import React, { useState } from 'react'
import { LayoutContainerMain } from '../../../component/LayoutContainer/LayoutContainerMain'
import LayoutContainer from '../../../component/LayoutContainer/LayoutContainer'
import { ProfileComponent } from './component/ProfileComponent'

export const Profile = () => {
    return (
        <LayoutContainerMain headerDark={true}>
            <LayoutContainer className="bg-blue">
                <ProfileComponent />
            </LayoutContainer>
        </LayoutContainerMain>
    )
}
