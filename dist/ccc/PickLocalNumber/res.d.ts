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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.DataInPickLocalNumber
export interface DataInPickLocalNumber {
	Callee: Callee;
	Caller: Caller;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.PickLocalNumberResponse
export interface PickLocalNumberResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	Data: DataInPickLocalNumber;
}

