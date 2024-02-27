/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { EventLoopContext } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { Button as RadixThemesButton, Container as RadixThemesContainer, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import NextLink from "next/link"
import NextHead from "next/head"



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

export default function Component() {

  return (
    <Fragment>
  <Fragment_1762bb90abdb81b879b2a22edbbe01a1/>
  <RadixThemesFlex>
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
  <RadixThemesContainer css={{"paddingTop": "6em", "maxWidth": "60em"}}>
  <RadixThemesText as={`p`}>
  {`fleet page`}
</RadixThemesText>
</RadixThemesContainer>
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
