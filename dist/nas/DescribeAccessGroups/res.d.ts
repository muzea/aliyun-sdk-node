// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeAccessGroupsAccessGroup1
export interface DescribeAccessGroupsAccessGroup1 {
	AccessGroupName: string;
	AccessGroupType: string;
	RuleCount: number;
	MountTargetCount: number;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeAccessGroupsAccessGroups0
export interface DescribeAccessGroupsAccessGroups0 {
	AccessGroup: DescribeAccessGroupsAccessGroup1[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeAccessGroupsResponse
export interface DescribeAccessGroupsResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	AccessGroups: DescribeAccessGroupsAccessGroups0;
}

