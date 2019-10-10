// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.Callee
export interface Callee {
	City: string;
	Number: string;
	Province: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.Caller
export interface Caller {
	City: string;
	Number: string;
	Province: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.DialNumberPair
export interface DialNumberPair {
	Callee: Callee;
	Caller: Caller;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.DialNumberPairsInPickOutboundNumbers
export interface DialNumberPairsInPickOutboundNumbers {
	DialNumberPair: DialNumberPair[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.PickOutboundNumbersResponse
export interface PickOutboundNumbersResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	DialNumberPairs: DialNumberPairsInPickOutboundNumbers;
}

