import {Link} from "../../../../components/Link.ts";
import {S} from "../Projects_Styles.ts"

export type TabsStatusType = "all" | "landing" | "react" | "spa"

type TabMenuPropsType = {
    tabsItems: Array<{status: TabsStatusType, title: string }>
    changeFilterStatus: (value: TabsStatusType) => void
    currentFilterStatus: string
}

export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <S.TabMenu>
            <ul>
                {props.tabsItems.map((item, index)=>{
                    return <S.TabMenuItem  key={index} active={props.currentFilterStatus === item.status}>
                        <Link active={props.currentFilterStatus === item.status} as="button" onClick={()=> {props.changeFilterStatus(item.status)} }>{item.title}</Link>
                    </S.TabMenuItem>
                })}
            </ul>
        </S.TabMenu>
    );
};
