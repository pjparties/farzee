import React from 'react'
import Navbar from './Navbar'
import flowchart from '../assets/flowchart.png'
import protocol from '../assets/protocol.png'
import roadmap from '../assets/roadmap.png'
import '../styles/Details.css'

function Details() {
    return (
        <div className='container'>
            <Navbar />
            <div className="title">
                <h1>CITATION</h1>
            </div>
            <div className="body">
                <h2 className='heading'>Using BERT Encoding to Tackle the Mad-lib Attack in SMS Spam Detection</h2>
                <h3 className='sub'>Sergio Rojas–Galeano</h3>
                <h3 className='sub'>Universidad Distrital Francisco Jos ́e de Caldas, Bogota , Colombia</h3>
                <img className='protocol' src={protocol} alt="protocol flowchart" />
                <p className='para'>One of the stratagems used to deceive spam filters is to sub- stitute vocables with synonyms or similar words that turn the message unrecognisable by the detection algorithms.<br/><br/>
                Using a dataset of 5572 SMS spam messages, we first established a baseline of detection performance using widely known doc- ument representation models (BoW and TFIDF) and the novel BERT model, coupled with a variety of classification algorithms (Decision Tree, kNN, SVM, Logistic Regression, Naive Bayes, Multilayer Perceptron). Then, we built a thesaurus of the vocabulary contained in these mes- sages, and set up a Mad-lib attack experiment in which we modified each message of a held out subset of data (not used in the baseline experiment) with different rates of substitution of original words with synonyms from the thesaurus. Lastly, we evaluated the detection per- formance of the three representation models (BoW, TFIDF and BERT) coupled with the best classifier from the baseline experiment (SVM). We found that the classic models achieved a 94% Balanced Accuracy (BA) in the original dataset, whereas the BERT model obtained 96%. On the other hand, the Mad-lib attack experiment showed that BERT encodings manage to maintain a similar BA performance of 96% with an average substitution rate of 1.82 words per message, and 95% with 3.34 words substituted per message. In contrast, the BA performance of the BoW and TFIDF encoders dropped to chance.</p>
                <img src={roadmap} alt="roadmap diagram" className="roadmap" />
                <img src={flowchart} alt="flowchart of ml model" className="flow" />
                

            </div>
        </div>
    )
}

export default Details