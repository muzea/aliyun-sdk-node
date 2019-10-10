// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.FileServerConfig
export interface FileServerConfig {
	Bucket: string;
	InternalUrl: string;
	PublicUrl: string;
	VpcUrl: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.RegionConfig
export interface RegionConfig {
	AddressServerHost: string;
	AgentInstallScript: string;
	FileServerType: string;
	Id: string;
	ImageId: string;
	Name: string;
	No: number;
	Tag: string;
	FileServerConfig: FileServerConfig;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.QueryRegionConfigResponse
export interface QueryRegionConfigResponse {
	RequestId: string;
	Code: number;
	Message: string;
	RegionConfig: RegionConfig;
}

