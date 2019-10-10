// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.Project
export interface Project {
	ModifiedTime: string;
	RegionId: string;
	Title: string;
	Duration: number;
	ProjectId: string;
	StorageLocation: string;
	CreationTime: string;
	Status: string;
	Description: string;
	Timeline: string;
	CoverURL: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.AddEditingProjectResponse
export interface AddEditingProjectResponse {
	RequestId: string;
	Project: Project;
}

