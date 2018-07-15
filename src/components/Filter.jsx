import React from 'react';
import {Menu, Input} from 'semantic-ui-react';

const Filter = ({filter, setFilter, setSearchQuery, searchQuery}) => {
  return (
    <Menu text stackable={true}>
      <Menu.Item header>Фильтр</Menu.Item>
      <Menu.Item active={filter.by === 'all'} onClick={setFilter.bind(null, {by: 'all', order: 'asc'})}>
        Все
      </Menu.Item>
      <Menu.Item active={filter.by === 'author'} onClick={setFilter.bind(null, {by: 'author', order: 'asc'})}>
        По автору
      </Menu.Item>
      <Menu.Item active={filter.by === 'title'} onClick={setFilter.bind(null, {by: 'title', order: 'asc'})}>
        По названию
      </Menu.Item>
      <Menu.Item active={filter.by === 'price' && filter.order === 'desc'} onClick={setFilter.bind(null, {by: 'price', order: 'desc'})}>
        По цене (высокая)
      </Menu.Item>
      <Menu.Item active={filter.by === 'price' && filter.order === 'asc'} onClick={setFilter.bind(null, {by: 'price', order: 'asc'})}>
        По цене (низкая)
      </Menu.Item>
      <Menu.Item>
        <Input icon='search' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder='Искать книгу...'/>
      </Menu.Item>
    </Menu>
  );
};

export default Filter;
