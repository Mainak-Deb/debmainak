import React from 'react'
import Iconskill from './Iconskill'
import './styles/Imageskills.css'
import Typetext from './Typetext'

import reactimg from './images/react.png'
import express from './images/express.png'
import html from './images/html.png'
import css from './images/css.png'
import bootstrap from './images/bootstrap.png'
import node from './images/node.png'
import mysql from './images/mysql.png'
import mongodb from './images/mongodb.png'
import cpp from './images/cpp.png'
import java from './images/java.png'
import python from './images/python.png'
import c from './images/c.png'
import js from './images/js.png'
import opencv from './images/opencv.png'
import git from './images/git.png'
import github from './images/github.png'
import flask from './images/flask.png'
import django from './images/django.png'
import oracledb   from './images/oracleDB.png'
import p5js from './images/p5js.png'
import pygame from './images/pygame.png'
import ubuntu from './images/ubuntu.png'


const Imageskills = () => {
  return (
    <>
    <h1 className='retro'>
      Languages
    </h1>
    <div className='imageskills'>
    <Iconskill icon={html} text={'HTML'}/> 
    <Iconskill icon={css} text={'CSS'}/>
    <Iconskill icon={python} text={'Python'}/>
    <Iconskill icon={js} text={'JS'}/>
    <Iconskill icon={java} text={'Java'}/>
    <Iconskill icon={c} text={'C'}/>
    <Iconskill icon={cpp} text={'C++'}/>
    </div>
    <h1 className='retro'>
      Frameworks
    </h1>
    <div className='imageskills'>
        <Iconskill icon={reactimg} text={'React'}/> 
        <Iconskill icon={express} text={'express'}/> 
        <Iconskill icon={bootstrap} text={'Bootstrap'}/>
        <Iconskill icon={node} text={'Node'}/>
        <Iconskill icon={mysql} text={'MySQL'}/>
        <Iconskill icon={mongodb} text={'MongoDB'}/>
        <Iconskill icon={flask} text={'Flask'}/>
        <Iconskill icon={django} text={'Django'}/>
        <Iconskill icon={oracledb} text={'OracleDB'}/>
        <Iconskill icon={p5js} text={'p5.js'}/>
        <Iconskill icon={pygame} text={'Pygame'}/>
        <Iconskill icon={ubuntu} text={'Ubuntu'}/>
        
    </div>
    </>
    
  )
}

export default Imageskills