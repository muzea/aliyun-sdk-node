// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.ShareGroup
export interface ShareGroup {
	Group: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.ShareGroups
export interface ShareGroups {
	ShareGroup: ShareGroup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Account
export interface Account {
	AliyunId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Accounts
export interface Accounts {
	Account: Account[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeImageSharePermissionResponse
export interface DescribeImageSharePermissionResponse {
	RequestId: string;
	RegionId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	ImageId: string;
	ShareGroups: ShareGroups;
	Accounts: Accounts;
}

