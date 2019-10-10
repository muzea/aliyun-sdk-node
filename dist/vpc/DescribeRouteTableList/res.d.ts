// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.VSwitchIdsInDescribeRouteTableList
export interface VSwitchIdsInDescribeRouteTableList {
	VSwitchId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.Tag
export interface Tag {
	Key: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.TagsInDescribeRouteTableList
export interface TagsInDescribeRouteTableList {
	Tag: Tag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.RouterTableListType
export interface RouterTableListType {
	VpcId: string;
	RouterType: string;
	RouterId: string;
	RouteTableId: string;
	RouteTableName: string;
	RouteTableType: string;
	Description: string;
	ResourceGroupId: string;
	CreationTime: string;
	Status: string;
	VSwitchIds: VSwitchIdsInDescribeRouteTableList;
	Tags: TagsInDescribeRouteTableList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.RouterTableList
export interface RouterTableList {
	RouterTableListType: RouterTableListType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeRouteTableListResponse
export interface DescribeRouteTableListResponse {
	RequestId: string;
	Code: string;
	Message: string;
	Success: boolean;
	PageSize: number;
	PageNumber: number;
	TotalCount: number;
	RouterTableList: RouterTableList;
}

