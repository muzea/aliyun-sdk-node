// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.Token
export interface Token {
	Signature: string;
	SignData: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.RefreshTokenResponse
export interface RefreshTokenResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	Token: Token;
}

