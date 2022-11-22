import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CardPokemon from '../components/CardPokemon';


export default {
  title: 'Example/CardPokemon',
  component: CardPokemon,
 

} as ComponentMeta<typeof CardPokemon>;


const Template: ComponentStory<typeof CardPokemon> = (args) => <CardPokemon {...args} />;

export const Grass = Template.bind({});

Grass.args = {
  name: "Grass",
};

export const Card = Template.bind({});

Card.args = {
  id: 1,
  name: "Creatormon",
  types: [
    {
      type: {
        name: "Grass",
      },
    },
  ],
};
