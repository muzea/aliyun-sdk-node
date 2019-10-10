// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ConfigItem
export interface ConfigItem {
	Name: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ConfigItems
export interface ConfigItems {
	ConfigItem: ConfigItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ListConfigResponse
export interface ListConfigResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	ConfigItems: ConfigItems;
}

