// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.OssLogConfig
export interface OssLogConfig {
	Enable: string;
	Bucket: string;
	Prefix: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.GreenManagerConfig
export interface GreenManagerConfig {
	Quota: string;
	Ratio: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.WafConfig
export interface WafConfig {
	Enable: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.Configs
export interface Configs {
	OssLogConfig: OssLogConfig;
	GreenManagerConfig: GreenManagerConfig;
	WafConfig: WafConfig;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeUserConfigsResponse
export interface DescribeUserConfigsResponse {
	RequestId: string;
	Configs: Configs;
}

