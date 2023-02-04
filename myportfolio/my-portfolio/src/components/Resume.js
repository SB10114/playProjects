import React, {useState} from 'react'
import { Header} from 'semantic-ui-react'
// import { Document, Page } from 'react-pdf'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5'
import Resume1 from '../Assets/Resume1.pdf'

const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }
  return(
    <div>
        <Header className='header' as='h1'>Resume</Header>
        <Document file={Resume1} onLoadSuccess={onDocumentLoadSuccess}> 
            <Page pageNumber={pageNumber} />
        </Document>
        {/* <p>Page {pageNumber} of {numPages} 
        </p> */}
    </div>
  )
}
 export default Resume