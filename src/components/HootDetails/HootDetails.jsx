import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import * as hootService from '../../services/hootService';


const HootDetails = () => {
    const { hootId } = useParams();
    console.log('hootId', hootId);
};

  if (!hoot) return <main>Loading...</main>;

    return (
        <main>
        <section>
          <header>
            <p>{hoot.category.toUpperCase()}</p>
            <h1>{hoot.title}</h1>
            <p>
              {`${hoot.author.username} posted on
              ${new Date(hoot.createdAt).toLocaleDateString()}`}
            </p>
          </header>
          <p>{hoot.text}</p>
        </section>
        <section>
          <h2>Comments</h2>
        </section>
      </main>
    );
  
  export default HootDetails;