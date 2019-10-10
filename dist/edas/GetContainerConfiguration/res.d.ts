// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ContainerConfiguration
export interface ContainerConfiguration {
	MaxThreads: number;
	URIEncoding: string;
	UseBodyEncoding: boolean;
	HttpPort: number;
	ContextPath: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.GetContainerConfigurationResponse
export interface GetContainerConfigurationResponse {
	Code: number;
	Message: string;
	RequestId: string;
	ContainerConfiguration: ContainerConfiguration;
}

