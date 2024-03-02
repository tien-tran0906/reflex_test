import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "/utils/state.js"

export const initialState = {"state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "state.radio_state": {"selected": ""}, "state.data_editor_select_option": {"clicked_data": "", "cols": [{"title": "Select", "type": "bool", "width": 80}, {"title": "Description", "type": "str"}, {"title": "Start Date", "type": "str"}, {"title": "End Date", "type": "str"}, {"title": "Quantity", "type": "float"}, {"title": "Unit", "type": "str"}, {"title": "tCO2e", "type": "float"}, {"title": "Month", "type": "str"}, {"title": "Material Type", "type": "str"}], "data": [[false, "Waste Management", "2023-09-01", "2023-09-01", "50.64", "dollars", "0.03527890038", "Sep '23", ""], [true, "Waste Management", "2023-08-31", "2023-09-01", "25.32", "dollars", "0.01763945019", "Sep '23", ""], [false, "Waste Management", "2023-08-31", "2023-08-31", "50.64", "dollars", "0.03527890038", "Aug '23", ""], [false, "Waste Management", "2023-08-31", "2023-08-31", "25.32", "dollars", "0.01763945019", "Aug '23", ""], [false, "Waste Management", "2023-08-31", "2023-08-31", "25.32", "dollars", "0.01763945019", "Aug '23", ""], [true, "Waste Management", "2023-07-05", "2023-08-31", "50.64", "dollars", "0.03527890038", "Aug '23", ""], [false, "Diesel", "2023-08-23", "2023-08-28", "36.37", "gallons", "0.4093297292599999", "Aug '23", ""], [false, "Diesel", "2023-08-07", "2023-08-23", "36.37", "gallons", "0.4093297292599999", "Aug '23", ""], [false, "Diesel", "2023-08-01", "2023-08-07", "31.818", "gallons", "0.358098799164", "Aug '23", ""], [false, "Gas", "2023-07-20", "2023-07-28", "34.66", "gallons", "0.3354496353799999", "Jul '23", ""], [false, "Gas", "2023-07-14", "2023-07-20", "41.14", "dollars", "0.0088884212428", "Jul '23", ""], [false, "Gas", "2023-06-22", "2023-07-14", "34.185", "gallons", "0.330852446205", "Jul '23", ""], [false, "Waste Management", "2023-07-05", "2023-07-05", "50.65", "dollars", "0.0352858669875", "Jul '23", ""], [false, "Waste Management", "2023-04-12", "2023-07-05", "25.32", "dollars", "0.01763945019", "Jul '23", ""], [false, "Gas", "2023-06-16", "2023-06-22", "10.871", "gallons", "0.105212723203", "Jun '23", ""], [false, "Gas", "2023-05-29", "2023-06-16", "5.896", "gallons", "0.0570632155279999", "Jun '23", ""], [false, "Electricity", "2023-05-08", "2023-06-07", "9160.0", "kWh", "2.5083133028", "Jun '23", ""], [false, "Gas", "2023-05-29", "2023-05-29", "6.0", "gallons", "0.058069758", "Apr '23", "Gas"], [false, "Gas", "2023-05-18", "2023-05-29", "23.951", "gallons", "0.231804795643", "Apr '23", "Gas"], [false, "Gas", "2023-04-29", "2023-05-18", "2.768", "gallons", "0.026789515024", "May '23", ""], [false, "Electricity", "2023-04-07", "2023-05-08", "12720.0", "kWh", "3.4831599576", "May '23", ""], [false, "Gas", "2023-04-29", "2023-04-29", "4.004", "gallons", "0.0387518851719999", "May '23", "Gas"], [false, "Gas", "2023-04-29", "2023-04-29", "26.783", "gallons", "0.259213721419", "Mar '23", "Gas"]], "df": "./site_csv_files/TEST3.csv"}}

export const defaultColorMode = "None"
export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  state: createContext(null),
  state__radio_state: createContext(null),
  state__data_editor_select_option: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}}

export const state_name = "state"
export const onLoadInternalEvent = () => [
    Event('state.update_vars_internal', {vars: hydrateClientStorage(clientStorage)}),
    Event('state.on_load_internal')
]

export const initialEvents = () => [
    Event('state.hydrate'),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return (
    <UploadFilesContext.Provider value={[filesById, setFilesById]}>
      {children}
    </UploadFilesContext.Provider>
  )
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectError] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext.Provider value={[addEvents, connectError]}>
      {children}
    </EventLoopContext.Provider>
  )
}

export function StateProvider({ children }) {
  const [state, dispatch_state] = useReducer(applyDelta, initialState["state"])
  const [state__radio_state, dispatch_state__radio_state] = useReducer(applyDelta, initialState["state.radio_state"])
  const [state__data_editor_select_option, dispatch_state__data_editor_select_option] = useReducer(applyDelta, initialState["state.data_editor_select_option"])
  const dispatchers = useMemo(() => {
    return {
      "state": dispatch_state,
      "state.radio_state": dispatch_state__radio_state,
      "state.data_editor_select_option": dispatch_state__data_editor_select_option,
    }
  }, [])

  return (
    <StateContexts.state.Provider value={ state }>
    <StateContexts.state__radio_state.Provider value={ state__radio_state }>
    <StateContexts.state__data_editor_select_option.Provider value={ state__data_editor_select_option }>
      <DispatchContext.Provider value={dispatchers}>
        {children}
      </DispatchContext.Provider>
    </StateContexts.state__data_editor_select_option.Provider>
    </StateContexts.state__radio_state.Provider>
    </StateContexts.state.Provider>
  )
}