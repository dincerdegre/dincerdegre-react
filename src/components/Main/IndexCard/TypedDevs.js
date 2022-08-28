import React, {useRef,useEffect} from 'react';
import classes from './TypedDevs.module.css';
import Typed from 'typed.js';

export const TypedDevs = () => {
    const el = useRef(null);
    const typed = useRef(null);
    useEffect(()=> {
        const options = {
            strings: [
            'HTML',
            'CSS',
            'JAVASCRIPT',
            'REACT',
            'NODEJS',
            'MONGODB',
            'MYSQL',
            'POSTGRESQL',
            'PHP',
            'JQUERY',
          ],
          typeSpeed: 80,
          backSpeed: 100,
          loop:true
        };
        // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
    },[])
    return (
        <div className={classes.typedContainer}>
          <div className="type-wrap">
            <h2><span style={{color:'#1F1F25',overflow: 'hidden' }} ref={el} /></h2>
          </div>
        </div>
      );
}
