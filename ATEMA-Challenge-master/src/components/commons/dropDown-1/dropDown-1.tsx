import { useState } from "react";
import { Wrapper, Item, Name, ItemBox } from "./dropDown-1.styles";

const dataLists = [
  { id: 1, name: "밀링" },
  { id: 2, name: "선반" },
];

interface Iprops {
  onClickMethodList: any;
  Methodfillter: Array<string>;
}
export function DropDown1(props: Iprops) {
  return (
    <>
      <Wrapper>
        {dataLists.map((data) => (
          <ItemBox key={data.id}>
            <Name>
              <Item
                type="checkbox"
                id={data.name}
                onChange={props.onClickMethodList(data.name)}
                checked={props.Methodfillter.includes(data.name) ? true : false}
              />
              {data.name}
            </Name>
          </ItemBox>
        ))}
      </Wrapper>
    </>
  );
}
