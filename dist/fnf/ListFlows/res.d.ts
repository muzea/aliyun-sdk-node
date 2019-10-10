// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/fnf.FlowsItem
export interface FlowsItem {
	Name: string;
	Description: string;
	Definition: string;
	Id: string;
	Type: string;
	RoleArn: string;
	CreatedTime: string;
	LastModifiedTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/fnf.ListFlowsResponse
export interface ListFlowsResponse {
	RequestId: string;
	NextToken: string;
	Flows: FlowsItem[];
}

