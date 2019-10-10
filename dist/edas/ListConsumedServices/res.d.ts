// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.GroupsInListConsumedServices
export interface GroupsInListConsumedServices {
	group: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.IpsInListConsumedServices
export interface IpsInListConsumedServices {
	ip: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ListConsumedServices
export interface ListConsumedServices {
	AppId: string;
	DockerApplication: boolean;
	Group2Ip: string;
	Name: string;
	Type: string;
	Version: string;
	Groups: GroupsInListConsumedServices;
	Ips: IpsInListConsumedServices;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ConsumedServicesList
export interface ConsumedServicesList {
	ListConsumedServices: ListConsumedServices[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ListConsumedServicesResponse
export interface ListConsumedServicesResponse {
	Code: number;
	Message: string;
	RequestId: string;
	ConsumedServicesList: ConsumedServicesList;
}

