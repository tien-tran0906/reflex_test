/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { Box as RadixThemesBox, Button as RadixThemesButton, Card as RadixThemesCard, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Heading as RadixThemesHeading, Link as RadixThemesLink, RadioGroup as RadixThemesRadioGroup, ScrollArea as RadixThemesScrollArea, Select as RadixThemesSelect, Separator as RadixThemesSeparator, Tabs as RadixThemesTabs, Text as RadixThemesText, TextArea as RadixThemesTextArea, TextField as RadixThemesTextField, Theme as RadixThemesTheme } from "@radix-ui/themes"
import env from "/env.json"
import NextLink from "next/link"
import "@glideapps/glide-data-grid/dist/index.css"
import "@radix-ui/themes/styles.css"
import theme from "/utils/theme.js"
import { Heading } from "@chakra-ui/react"
import { BarChart3Icon as LucideBarChart3Icon, FileIcon as LucideFileIcon, PencilIcon as LucidePencilIcon } from "lucide-react"
import { Bar as RechartsBar, CartesianGrid as RechartsCartesianGrid, ResponsiveContainer as RechartsResponsiveContainer, Tooltip as RechartsTooltip, XAxis as RechartsXAxis, YAxis as RechartsYAxis } from "recharts"
import dynamic from "next/dynamic"
import { GridCellKind } from "@glideapps/glide-data-grid"
import { formatDataEditorCells } from "/utils/helpers/dataeditor.js"
import NextHead from "next/head"

const RechartsComposedChart = dynamic(() => import('recharts').then((mod) => mod.ComposedChart), { ssr: false });
const DataEditor = dynamic(() => import('@glideapps/glide-data-grid'), { ssr: false });


export function Fragment_1762bb90abdb81b879b2a22edbbe01a1 () {
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <RadixThemesDialog.Root open={connectError !== null}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getBackendURL(env.EVENT).href}
</RadixThemesText>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Dataeditor_b8162f93e91bd29fb5a5a0fe6a41cf71 () {
  const state__data_editor_select_option = useContext(StateContexts.state__data_editor_select_option)
  const [addEvents, connectError] = useContext(EventLoopContext);
  function getData_lrkwputw([col, row]){
    return formatDataEditorCells(col, row, state__data_editor_select_option.cols, state__data_editor_select_option.data);
  }

  const on_cell_clicked_33e23fe60947e0578fc4be716cf80026 = useCallback((_pos) => addEvents([Event("state.data_editor_select_option.click_cell", {pos:_pos})], (_pos), {}), [addEvents, Event])

  return (
    <DataEditor columns={state__data_editor_select_option.cols} data={state__data_editor_select_option.data} getCellContent={getData_lrkwputw} getCellForSelection={true} onCellClicked={on_cell_clicked_33e23fe60947e0578fc4be716cf80026} onPaste={false} rows={state__data_editor_select_option.data.length}/>
  )
}

export function Text_c6e4c5add52b071218e2600f11e66b2d () {
  const state__data_editor_select_option = useContext(StateContexts.state__data_editor_select_option)


  return (
    <RadixThemesText as={`p`}>
  {state__data_editor_select_option.clicked_data}
</RadixThemesText>
  )
}

export function Flex_e57d2f2702d3b9aac588af12026b9e32 () {


  return (
    <RadixThemesFlex direction={`column`} gap={`2`}>
  {["All Sites", "BIR Phase 3", "Bainbridge Office", "Blo Blow Dry Bar", "CKFR 51", "COBI Police and Municipal Court", "Canterwood Homes", "Centrum TI Bldg 305", "Dungeness Outdoor Classroom", "Enetai Townhomes", "Fire Station 21 Awning", "Henderson", "Hyla Highschool Bldg 385", "M&M1", "Maciejewski and Matney", "NK Service Center", "NW Maritime Center", "North Shore Residence", "PBV Carriage Homes _ 2221", "PBV Tier 3 Duplex _ 2003", "Rivulet", "Sequim Office", "Seventh Haven Childcare TI", "Smith Residence", "TEST3", "Warrior Ridge Housing", "Warrior Ridge Housing II", "Winslow Town Center"].map((value, index_8ecf244ba0cd76daea571926733cfad8) => (
  <RadixThemesText as={`label`} key={index_8ecf244ba0cd76daea571926733cfad8} size={`2`}>
  <RadixThemesFlex gap={`2`}>
  <RadixThemesRadioGroup.Item value={isTrue(((typeof value) === (`string`))) ? value : JSON.stringify(value)}/>
  {isTrue(((typeof value) === (`string`))) ? value : JSON.stringify(value)}
</RadixThemesFlex>
</RadixThemesText>
))}
</RadixThemesFlex>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_1762bb90abdb81b879b2a22edbbe01a1/>
  <RadixThemesFlex direction={`column`} gap={`9`}>
  <RadixThemesFlex>
  <RadixThemesFlex align={`center`} css={{"position": "fixed", "top": "0px", "backgroundColor": "#ffffff", "padding": "1em", "height": "4em", "width": "100%", "borderWidth": "1px", "zIndex": "5", "flexDirection": "row"}} justify={`center`} gap={`2`}>
  <RadixThemesFlex justify={`center`} gap={`9`}>
  <RadixThemesFlex align={`center`} justify={`center`} gap={`9`}>
  <RadixThemesLink asChild={true} color={`gray`} highContrast={true} underline={`hover`} weight={`medium`}>
  <NextLink href={`/`} passHref={true}>
  {`Overview`}
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} color={`gray`} highContrast={true} underline={`hover`} weight={`medium`}>
  <NextLink href={`/sites`} passHref={true}>
  {`Sites`}
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} color={`gray`} highContrast={true} underline={`hover`} weight={`medium`}>
  <NextLink href={`/fleets`} passHref={true}>
  {`Fleets`}
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} color={`gray`} highContrast={true} underline={`hover`} weight={`medium`}>
  <NextLink href={`/feedback`} passHref={true}>
  {`Feedback`}
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
  <RadixThemesButton>
  {`Sign Out`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex css={{"width": "100%"}} direction={`row`} justify={`between`} gap={`5`}>
  <RadixThemesFlex justify={`start`}>
  <RadixThemesFlex align={`start`} css={{"height": "100vh", "left": "0px", "top": "0px", "paddingInlineStart": "2em", "paddingInlineEnd": "2em", "paddingTop": "1em", "paddingBottom": "1em", "backgroundColor": "#ffffff", "alignItems": "left", "width": "250px", "border": "2px solid #F4F3F6", "flexDirection": "column"}} gap={`2`}>
  <RadixThemesHeading css={{"marginBottom": "0.5em"}}>
  {`Site Options`}
</RadixThemesHeading>
  <RadixThemesSeparator size={`4`}/>
  <RadixThemesScrollArea>
  <RadixThemesFlex css={{"height": "100% !important", "scrollbars": "vertical", "type": "auto"}}>
  <RadixThemesRadioGroup.Root defaultValue={``} size={`2`}>
  <Flex_e57d2f2702d3b9aac588af12026b9e32/>
</RadixThemesRadioGroup.Root>
</RadixThemesFlex>
</RadixThemesScrollArea>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "paddingInlineStart": "3em", "paddingInlineEnd": "3em", "paddingTop": "1em", "paddingBottom": "1em", "flexDirection": "column"}} gap={`2`}>
  <RadixThemesFlex css={{"flexGrow": "1", "width": "100%"}} direction={`column`} gap={`4`}>
  <Heading size={`2xl`} sx={{"color": "black"}}>
  {`Sites`}
</Heading>
  <RadixThemesTabs.Root css={{"size": "1"}} defaultValue={`dashboard`}>
  <RadixThemesTabs.List>
  <RadixThemesTabs.Trigger value={`dashboard`}>
  <RadixThemesFlex direction={`row`} gap={`2`}>
  <LucideBarChart3Icon css={{"color": "var(--current-color)"}} size={18}>
  {`bar-chart-3`}
</LucideBarChart3Icon>
  <RadixThemesText as={`p`}>
  {`Dashboard`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesTabs.Trigger>
  <RadixThemesTabs.Trigger value={`files`}>
  <RadixThemesFlex direction={`row`} gap={`2`}>
  <LucideFileIcon css={{"color": "var(--current-color)"}} size={18}>
  {`file`}
</LucideFileIcon>
  <RadixThemesText as={`p`}>
  {`Files`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesTabs.Trigger>
  <RadixThemesTabs.Trigger value={`edit`}>
  <RadixThemesFlex direction={`row`} gap={`2`}>
  <LucidePencilIcon css={{"color": "var(--current-color)"}} size={18}>
  {`pencil`}
</LucidePencilIcon>
  <RadixThemesText as={`p`}>
  {`Edit`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesTabs.Trigger>
</RadixThemesTabs.List>
  <RadixThemesTabs.Content value={`dashboard`}>
  <RadixThemesBox css={{"width": "100%", "height": "100%"}}>
  <RadixThemesFlex direction={`column`} gap={`5`}>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesGrid columns={`3`} css={{"width": "100%"}} rows={`1`} gap={`4`}>
  <RadixThemesCard size={`4`}>
  {`First metric`}
</RadixThemesCard>
  <RadixThemesCard>
  {`Second metric`}
</RadixThemesCard>
  <RadixThemesCard>
  {`Third metric`}
</RadixThemesCard>
</RadixThemesGrid>
  <RadixThemesFlex direction={`column`} gap={`2`}>
  <RadixThemesFlex justify={`end`}>
  <RadixThemesSelect.Root defaultValue={`YTD`}>
  <RadixThemesSelect.Trigger color={`blue`} variant={`soft`}/>
  <RadixThemesSelect.Content color={`blue`}>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`YTD`}>
  {`YTD`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`1Y`}>
  {`1Y`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`3Y`}>
  {`3Y`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`5Y`}>
  {`5Y`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`10Y`}>
  {`10Y`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`All`}>
  {`All`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
</RadixThemesFlex>
  <RadixThemesBox css={{"width": "100%", "height": "50vh"}}>
  <RechartsResponsiveContainer height={`100%`} minHeight={100} minWidth={200} width={`100%`}>
  <RechartsComposedChart data={[{"Month": "Sep '23", "Quantity": 0.06}, {"Month": "Aug '23", "Quantity": 1.3}, {"Month": "Jul '23", "Quantity": 0.74}, {"Month": "Jun '23", "Quantity": 2.68}, {"Month": "Apr '23", "Quantity": 0.29}, {"Month": "May '23", "Quantity": 3.55}, {"Month": "Mar '23", "Quantity": 0.26}]} height={`100%`} width={`100%`}>
  <RechartsBar barSize={40} dataKey={`Quantity`} fill={`#413ea0`}/>
  <RechartsXAxis dataKey={`Month`}/>
  <RechartsYAxis/>
  <RechartsCartesianGrid strokeDasharray={`3 3`}/>
  <RechartsTooltip/>
</RechartsComposedChart>
</RechartsResponsiveContainer>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesTabs.Content>
  <RadixThemesTabs.Content value={`files`}>
  <RadixThemesFlex align={`center`} css={{"height": "100%", "width": "100%", "flexDirection": "column"}} gap={`2`}>
  <RadixThemesFlex direction={`column`} gap={`5`}>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesText as={`p`}>
  {`Your project data is up-to-date`}
</RadixThemesText>
  <RadixThemesFlex justify={`end`} gap={`3`}>
  <RadixThemesSelect.Root>
  <RadixThemesSelect.Trigger placeholder={`Filter`}/>
  <RadixThemesSelect.Content>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`Desc 1`}>
  {`Desc 1`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Desc 2`}>
  {`Desc 2`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesFlex align={`end`} justify={`end`} gap={`3`}>
  <RadixThemesDialog.Root>
  <RadixThemesDialog.Trigger>
  <RadixThemesButton size={`2`}>
  {`Add New Site`}
</RadixThemesButton>
</RadixThemesDialog.Trigger>
  <RadixThemesDialog.Content>
  <RadixThemesFlex direction={`column`} gap={`3`}>
  <RadixThemesDialog.Title>
  {`Add New Site`}
</RadixThemesDialog.Title>
  <RadixThemesFlex direction={`column`} gap={`3`}>
  <RadixThemesText as={`div`} css={{"marginBottom": "4px"}} size={`2`} weight={`bold`}>
  {`Site Name`}
</RadixThemesText>
  <RadixThemesTextField.Input placeholder={`Enter site name...`}/>
  <RadixThemesText as={`div`} css={{"marginBottom": "4px"}} size={`2`} weight={`bold`}>
  {`Category`}
</RadixThemesText>
  <RadixThemesSelect.Root>
  <RadixThemesSelect.Trigger placeholder={`Select category...`}/>
  <RadixThemesSelect.Content>
  <RadixThemesSelect.Group>
  <RadixThemesSelect.Label>
  {`Category`}
</RadixThemesSelect.Label>
  <RadixThemesSelect.Item value={`Clark Offices`}>
  {`Clark Offices`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Commercial Renovation and Remodeling`}>
  {`Commercial Renovation and Remodeling`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Infrastructure Construction`}>
  {`Infrastructure Construction`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Institutional Construction`}>
  {`Institutional Construction`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Multi-Family Residential Renovation and Remodeling`}>
  {`Multi-Family Residential Renovation and Remodeling`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`New Commercial`}>
  {`New Commercial`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`New Multi-Family Residential`}>
  {`New Multi-Family Residential`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`New Single-Family Residential`}>
  {`New Single-Family Residential`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`Single-Family Residential Renovation and Remodeling`}>
  {`Single-Family Residential Renovation and Remodeling`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesText as={`div`} css={{"marginBottom": "4px"}} size={`2`} weight={`bold`}>
  {`Address`}
</RadixThemesText>
  <RadixThemesTextField.Input placeholder={`123 Main Street`}/>
</RadixThemesFlex>
  <RadixThemesText as={`div`} css={{"marginBottom": "4px"}} size={`2`} weight={`bold`}>
  {`Description`}
</RadixThemesText>
  <RadixThemesTextArea placeholder={`The more detail the better...`}/>
  <RadixThemesFlex css={{"marginTop": "16px"}} justify={`end`} gap={`3`}>
  <RadixThemesDialog.Close>
  <RadixThemesButton color={`gray`} variant={`soft`}>
  {`Cancel`}
</RadixThemesButton>
</RadixThemesDialog.Close>
  <RadixThemesDialog.Close>
  <RadixThemesButton>
  {`Save`}
</RadixThemesButton>
</RadixThemesDialog.Close>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</RadixThemesFlex>
</RadixThemesFlex>
  <Text_c6e4c5add52b071218e2600f11e66b2d/>
  <div css={{"width": "100%", "height": "100%"}}>
  <Dataeditor_b8162f93e91bd29fb5a5a0fe6a41cf71/>
</div>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesTabs.Content>
  <RadixThemesTabs.Content value={`edit`}/>
</RadixThemesTabs.Root>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
