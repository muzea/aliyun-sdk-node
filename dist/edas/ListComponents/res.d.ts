// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.Component
export interface Component {
	ComponentId: string;
	Type: string;
	Version: string;
	Expired: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ComponentList
export interface ComponentList {
	Component: Component[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ListComponentsResponse
export interface ListComponentsResponse {
	Code: number;
	Message: string;
	ComponentList: ComponentList;
}

