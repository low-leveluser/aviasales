import { combineReducers } from "redux"

import CounterReducer from "./CounterReducer"
import FilterReducer from "./FilterReducer"
import TabsReducer from "./TabsReducer"
import TicketsReducer from "./TicketsReducer"

export default combineReducers({
    filtersData: FilterReducer,
    counter: CounterReducer,
    ticketsData: TicketsReducer,
    tabsData: TabsReducer,
})