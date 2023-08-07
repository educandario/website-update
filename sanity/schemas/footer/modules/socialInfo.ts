const socialInfo = {
	type: 'object',
	name: 'socialInfo',
	title: 'Social',
	fields: [
		{
			type: 'string',
			name: 'type',
			title: 'Selecione',
			options: {
				list: [
					{ title: 'Facebook', value: 'facebook' },
					{ title: 'Instagram', value: 'instagram' },
					{ title: 'Whatsapp', value: 'whatsapp' },
				],
			},
		},
		{
			type: 'string',
			name: 'link',
			title: 'Link',
		},
	],
}

export default socialInfo
