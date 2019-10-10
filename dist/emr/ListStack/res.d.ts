// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.Stack
export interface Stack {
	Name: string;
	Version: string;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.StackList
export interface StackList {
	Stack: Stack[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListStackResponse
export interface ListStackResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	StackList: StackList;
}

