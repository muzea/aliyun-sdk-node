// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.Project
export interface Project {
	Name: string;
	Region: string;
	ModifyTime: number;
	ClusterId: string;
	ManagerIds: string;
	State: string;
	Modifier: string;
	Creator: string;
	Id: string;
	CreateTime: number;
	Description: string;
	DeployType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.Projects
export interface Projects {
	Project: Project[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.ListProjectResponse
export interface ListProjectResponse {
	RequestId: string;
	PageIndex: number;
	PageSize: number;
	TotalPage: number;
	TotalCount: number;
	Projects: Projects;
}

