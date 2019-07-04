import rulesMD from './rules.md'
import Mailchimp from 'react-mailchimp-form'

const React = require('react')
const ReactDOM = require('react-dom')
const ReactMarkdown = require('react-markdown')

class Homepage extends React.Component {
    constructor(props) {
        super(props)

        this.state = { terms: null }
    }
    componentWillMount() {
        fetch(rulesMD).then((response) => response.text()).then((text) => {
            this.setState({ terms: text })
        })
    }
    render() {
        return (
            <div>
                <ReactMarkdown source={this.state.terms} />
                <h2>Mailing list</h2>
                <p>Join our mailing list for updates</p>
                <Mailchimp
                    action='https://gregariousmammal.us10.list-manage.com/subscribe/post?u=a177a7811dd28fcd87829f78f&amp;id=ae210e49a5'
                    fields={[
                        {
                            name: 'EMAIL',
                            placeholder: 'Email',
                            type: 'email',
                            required: true
                        }
                    ]}
                />
            </div>
        );
    }
}

export { Homepage }