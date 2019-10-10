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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.DialNumberPairsInPickGlobalOutboundNumbers
export interface DialNumberPairsInPickGlobalOutboundNumbers {
	DialNumberPair: DialNumberPair[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.PickGlobalOutboundNumbersResponse
export interface PickGlobalOutboundNumbersResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	DialNumberPairs: DialNumberPairsInPickGlobalOutboundNumbers;
}

