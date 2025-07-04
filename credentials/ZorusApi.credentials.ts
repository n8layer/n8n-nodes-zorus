import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class ZorusApi implements ICredentialType {
	name = 'zorusApi';
	displayName = 'Zorus API';
	documentationUrl = 'https://developer.zorustech.com/api/docs/index.html';
	properties: INodeProperties[] = [
		{
			displayName: 'API Token',
			name: 'token',
			type: 'string',
			default: '',
			typeOptions: {
				password: true,
			},
			required: true,
		},
	];

	// This allows the credential to be used by other parts of n8n
	// stating how this credential is injected as part of the request
	// An example is the Http Request node that can make generic calls
	// reusing this credential
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '={{"Impersonation " + $credentials.token}}',
			},
		},
	};
}
