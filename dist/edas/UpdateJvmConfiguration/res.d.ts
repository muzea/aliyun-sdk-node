// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.JvmConfiguration
export interface JvmConfiguration {
	MaxPermSize: number;
	MaxHeapSize: number;
	Options: string;
	MinHeapSize: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.UpdateJvmConfigurationResponse
export interface UpdateJvmConfigurationResponse {
	Code: number;
	Message: string;
	RequestId: string;
	JvmConfiguration: JvmConfiguration;
}

