import React from 'react';
import { mount } from 'enzyme';
import {
  GridList,
  GridTile,
  GridTilePrimary,
  GridTilePrimaryContent,
  GridTileSecondary,
  GridTileTitle
} from './grid-list';

describe('GridList', () => {
  it('renders', () => {
    mount(
      <GridList>
        <GridTile>
          <GridTilePrimary>
            <GridTilePrimaryContent wrap>
              <img src="" alt="" />
            </GridTilePrimaryContent>
          </GridTilePrimary>
          <GridTileSecondary>
            <GridTileTitle>Tile</GridTileTitle>
          </GridTileSecondary>
        </GridTile>
      </GridList>
    );
  });

  it('can be tileGutter1', () => {
    const list = mount(<GridList tileGutter1 />);
    expect(list.hasClass('mdc-grid-list--tile-gutter-1')).toBe(true);
  });

  it('can be headerCaption', () => {
    const list = mount(<GridList headerCaption />);
    expect(list.hasClass('mdc-grid-list--header-caption')).toBe(true);
  });

  it('can be tileAspect 1x1', () => {
    const list = mount(<GridList tileAspect="1x1" />);
    expect(list.hasClass('mdc-grid-list--tile-aspect-1x1')).toBe(true);
  });
});