import React from 'react'
import PDFfile from './components/PDFfile'
import { PDFDownloadLink } from '@react-pdf/renderer'
import EmailForm from './components/EmailForm'



const App = () => {
  return (
    <div>
      <PDFDownloadLink document={<PDFfile/>} fileName="FORM">
        {({ loading }) => 
        loading ? (
          <button>
            loading Document
          </button>
        ) : (
          <button>
            download
          </button>
        )
        }
      </PDFDownloadLink>
      <EmailForm/>
    </div>
  )
}

export default App