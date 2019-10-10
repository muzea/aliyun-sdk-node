// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.GroupsInListPublishedServices
export interface GroupsInListPublishedServices {
	group: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.IpsInListPublishedServices
export interface IpsInListPublishedServices {
	ip: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ListPublishedServices
export interface ListPublishedServices {
	AppId: string;
	DockerApplication: boolean;
	Group2Ip: string;
	Name: string;
	Type: string;
	Version: string;
	Groups: GroupsInListPublishedServices;
	Ips: IpsInListPublishedServices;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.PublishedServicesList
export interface PublishedServicesList {
	ListPublishedServices: ListPublishedServices[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ListPublishedServicesResponse
export interface ListPublishedServicesResponse {
	Code: number;
	Message: string;
	RequestId: string;
	PublishedServicesList: PublishedServicesList;
}

