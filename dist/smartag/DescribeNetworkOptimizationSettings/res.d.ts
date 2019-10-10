// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.Setting
export interface Setting {
	Domain: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.Settings
export interface Settings {
	Setting: Setting[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.DescribeNetworkOptimizationSettingsResponse
export interface DescribeNetworkOptimizationSettingsResponse {
	RequestId: string;
	TotalCount: number;
	PageNo: number;
	PageSize: number;
	Settings: Settings;
}

