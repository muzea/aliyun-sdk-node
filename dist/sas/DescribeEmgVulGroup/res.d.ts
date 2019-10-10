// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.EmgVulGroup
export interface EmgVulGroup {
	AliasName: string;
	PendingCount: number;
	Name: string;
	GmtPublish: number;
	Description: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.DescribeEmgVulGroupResponse
export interface DescribeEmgVulGroupResponse {
	RequestId: string;
	TotalCount: number;
	EmgVulGroupList: EmgVulGroup[];
}

