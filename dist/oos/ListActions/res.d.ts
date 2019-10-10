// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/oos.Action
export interface Action {
	OOSActionName: string;
	Description: string;
	ActionType: string;
	CreatedDate: string;
	Properties: string;
	TemplateVersion: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/oos.ListActionsResponse
export interface ListActionsResponse {
	RequestId: string;
	MaxResults: number;
	NextToken: string;
	Actions: Action[];
}

