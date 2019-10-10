// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/fnf.ExecutionsItem
export interface ExecutionsItem {
	Name: string;
	FlowName: string;
	FlowDefinition: string;
	Input: string;
	Output: string;
	Status: string;
	StartedTime: string;
	StoppedTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/fnf.ListExecutionsResponse
export interface ListExecutionsResponse {
	RequestId: string;
	NextToken: string;
	Executions: ExecutionsItem[];
}

