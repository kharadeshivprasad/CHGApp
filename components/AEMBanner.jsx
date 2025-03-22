import React from 'react';
import { EditableComponent } from '@adobe/aem-react-editable-components';

const { NEXT_PUBLIC_AEM_SITE } = process.env;

export const Banner = ({ title, image }) => {
  debugger
    const bannerStyle = {
        backgroundImage: image ? `url(${image})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '50px',
        color: 'white',
        textAlign: 'center',
    };

    return (
        <div style={bannerStyle}>
            <h1>{title}</h1>
        </div>
    );
};

export const BannerEditConfig = {
    emptyLabel: 'Banner',
    isEmpty: function (props) {
        return !props || (!props.Title && !props.Image);
    },
    resourceType: `${NEXT_PUBLIC_AEM_SITE}/components/banner`
};

export const AEMBanner = (props) => (
    <EditableComponent config={BannerEditConfig} {...props}>
        <Banner />
    </EditableComponent>
);

export default AEMBanner;