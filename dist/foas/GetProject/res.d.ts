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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.GetProjectResponse
export interface GetProjectResponse {
	RequestId: string;
	Project: Project;
}

