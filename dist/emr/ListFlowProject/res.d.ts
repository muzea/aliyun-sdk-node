// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.Project
export interface Project {
	Id: string;
	GmtCreate: number;
	GmtModified: number;
	UserId: string;
	Name: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.Projects
export interface Projects {
	Project: Project[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListFlowProjectResponse
export interface ListFlowProjectResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	Total: number;
	Projects: Projects;
}

