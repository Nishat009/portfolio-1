import html from '../assets/svg/skills/html.svg'
import css from '../assets/svg/skills/css.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import nextJS from '../assets/svg/skills/nextJS.svg'
import react from '../assets/svg/skills/react.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import bulma from '../assets/svg/skills/bulma.svg'
import cypress from '../assets/svg/skills/cypress.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import tailwind from '../assets/svg/skills/tailwind.svg'
import git from '../assets/svg/skills/git.svg'
import materialui from '../assets/svg/skills/materialui.svg'
import jquery from '../assets/svg/skills/jquery.svg'
import laravel from '../assets/svg/skills/laravel.svg'
import figma from '../assets/svg/skills/figma.svg'
import canva from '../assets/svg/skills/canva.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'react':
            return react;
        case 'bootstrap':
            return bootstrap;
        case 'bulma':
            return bulma;
        case 'mysql':
            return mysql;
        case 'tailwind':
            return tailwind;
        case 'cypress':
            return cypress;
        case 'git':
            return git;
        case 'materialui':
            return materialui;
        case 'figma':
            return figma;
        case 'canva':
            return canva;
        case 'laravel':
            return laravel;
        case 'jquery':
            return jquery;
        default:
            break;
    }
}
