import axios from 'axios';
import { h, Component } from 'preact';

import Product from './product';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: this.props.products,
			current: '',
			shown: {},
			loading: false
		};
	}

	componentDidMount() {
		document.body.addEventListener('click', this.openPreview);
	}

	getProductDetails = () => {
		const sId = '7022058';
		const sToken = 'public_i3aiWjHuZs8SFDfSziFx5wC7TbtisrPj';
		return axios(`https://app.ecwid.com/api/v3/${sId}/products/${this.state.current}?token=${sToken}&cleanUrls=true`);
	}

	openPreview = (e) => {
		if (e.target.classList.contains('quick-view-btn')) {
			this.setState({ current: e.target.rel });
			this.getProductDetails().then((res) => { this.setState({ shown: res.data }); });
		}
	}

	render() {
		return (
			<div className="quick-view">
				<Product {...this.state.shown} />
			</div>
		);
	}
}