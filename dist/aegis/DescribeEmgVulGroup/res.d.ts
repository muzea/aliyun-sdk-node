// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.EmgVulGroup
export interface EmgVulGroup {
	Name: string;
	Status: number;
	PendingCount: number;
	GmtPublish: number;
	AliasName: string;
	Description: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.DescribeEmgVulGroupResponse
export interface DescribeEmgVulGroupResponse {
	RequestId: string;
	TotalCount: number;
	EmgVulGroupList: EmgVulGroup[];
}

