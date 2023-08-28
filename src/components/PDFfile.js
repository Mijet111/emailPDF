import React from "react";
import { Page, Text, Image, Document, StyleSheet } from '@react-pdf/renderer'


const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35
  },
  header: {
    fontSize: 24,
    textAlign:'center'
  },
  text: {
    margin:12,
    textAlign:'justify'

  }
})

const PDFfile = () => {
  return(
  <Document>
    <Page style={styles.body}>
      <Text style={styles.header} fixed>Heading</Text>
      <Text style={styles.text}> Lots of text</Text>
    </Page>
  </Document>
  )  
}

export default PDFfile