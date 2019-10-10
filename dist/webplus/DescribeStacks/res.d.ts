// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.Stack
export interface Stack {
	StackId: string;
	StackName: string;
	CategoryName: string;
	RecommendedStack: boolean;
	LatestStack: boolean;
	VersionCode: number;
	CreateTime: number;
	UpdateTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.Stacks
export interface Stacks {
	Stack: Stack[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.DescribeStacksResponse
export interface DescribeStacksResponse {
	RequestId: string;
	Code: string;
	Message: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	Stacks: Stacks;
}

