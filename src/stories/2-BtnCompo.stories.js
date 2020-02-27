import React, { Component } from 'react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Button from "../component/Button"
import '../styles.css'
// import { Button } from 'demo-design';


export default {
    title: 'ButtonSection',
    component: Button,
    decorators: [withInfo],

};

export const Primary = () => < Button variant = "primary" > Add < /Button>;