const dataLists = [
  { id: 1, name: "알루미늄" },
  { id: 2, name: "탄소강" },
  { id: 3, name: "구리" },
  { id: 4, name: "합금강" },
  { id: 5, name: "강철" },
];
import { Wrapper, Item, Name, ItemBox } from "./dropDown-2.styles";

interface Iprops {
  onClickMaterialList: any;

  Materialfillter: Array<string>;
}
export function DropDown2(props: Iprops) {
  return (
    <>
      <Wrapper>
        {dataLists.map((data) => (
          <ItemBox>
            <Name>
              <Item
                key={data.id}
                type="checkbox"
                id={data.name}
                onChange={props.onClickMaterialList(data.name)}
                checked={
                  props.Materialfillter.includes(data.name) ? true : false
                }
              />
              {data.name}
            </Name>
          </ItemBox>
        ))}
      </Wrapper>
    </>
  );
}
