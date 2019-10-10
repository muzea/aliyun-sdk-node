// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.GroupedVulItem
export interface GroupedVulItem {
	AliasName: string;
	Type: string;
	GmtLast: number;
	AsapCount: number;
	LaterCount: number;
	NntfCount: number;
	HandledCount: number;
	Tags: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.DescribeGroupedVulResponse
export interface DescribeGroupedVulResponse {
	RequestId: string;
	PageSize: number;
	CurrentPage: number;
	TotalCount: number;
	GroupedVulItems: GroupedVulItem[];
}

