// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ListServiceGroups
export interface ListServiceGroups {
	CreateTime: string;
	GroupId: string;
	GroupName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ServiceGroupsList
export interface ServiceGroupsList {
	ListServiceGroups: ListServiceGroups[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ListServiceGroupsResponse
export interface ListServiceGroupsResponse {
	Code: number;
	Message: string;
	RequestId: string;
	ServiceGroupsList: ServiceGroupsList;
}

