// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ListConfigCenters
export interface ListConfigCenters {
	DataId: string;
	Group: string;
	Id: string;
	AppName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ConfigCentersList
export interface ConfigCentersList {
	ListConfigCenters: ListConfigCenters[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ListConfigCentersResponse
export interface ListConfigCentersResponse {
	Code: number;
	Message: string;
	RequestId: string;
	ConfigCentersList: ConfigCentersList;
}

