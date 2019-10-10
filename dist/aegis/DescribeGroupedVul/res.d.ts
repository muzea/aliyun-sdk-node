// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.GroupedVulItem
export interface GroupedVulItem {
	Name: string;
	AliasName: string;
	Type: string;
	Status: number;
	GmtLast: number;
	AsapCount: number;
	LaterCount: number;
	NntfCount: number;
	HandledCount: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.DescribeGroupedVulResponse
export interface DescribeGroupedVulResponse {
	RequestId: string;
	PageSize: number;
	CurrentPage: number;
	TotalCount: number;
	GroupedVulItems: GroupedVulItem[];
}

