// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dypnsapi.TwiceTelVerifyResult
export interface TwiceTelVerifyResult {
	Carrier: string;
	VerifyResult: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dypnsapi.TwiceTelVerifyResponse
export interface TwiceTelVerifyResponse {
	RequestId: string;
	Code: string;
	Message: string;
	TwiceTelVerifyResult: TwiceTelVerifyResult;
}

