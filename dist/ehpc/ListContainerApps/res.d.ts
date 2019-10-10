// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ContainerAppsItem
export interface ContainerAppsItem {
	Id: string;
	Name: string;
	Description: string;
	Repository: string;
	ImageTag: string;
	CreateTime: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ContainerApps
export interface ContainerApps {
	ContainerAppsItem: ContainerAppsItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ListContainerAppsResponse
export interface ListContainerAppsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	ContainerApps: ContainerApps;
}

