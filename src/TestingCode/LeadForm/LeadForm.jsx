import React from 'react'
import { LeadFormComponent } from './components/LeadFormComponent'
import { LayoutContainerMain } from '../../component/LayoutContainer/LayoutContainerMain'
import LayoutContainer from '../../component/LayoutContainer/LayoutContainer'

export const LeadForm = () => {

    return (
        <div>
            <LayoutContainerMain headerDark={true}>
                <LayoutContainer className="bg-blue">
                    <LeadFormComponent />
                    <h1>hello</h1>
                </LayoutContainer>
            </LayoutContainerMain>
        </div>
    )
}
