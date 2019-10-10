// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.ProjectsItem
export interface ProjectsItem {
	Project: string;
	Endpoint: string;
	ServiceRole: string;
	CreateTime: string;
	ModifyTime: string;
	CU: number;
	Type: string;
	BillingType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.ListProjectsResponse
export interface ListProjectsResponse {
	RequestId: string;
	NextMarker: string;
	Projects: ProjectsItem[];
}

