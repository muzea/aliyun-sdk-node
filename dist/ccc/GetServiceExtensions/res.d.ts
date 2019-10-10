// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ServiceExtension
export interface ServiceExtension {
	Name: string;
	Number: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ServiceExtensions
export interface ServiceExtensions {
	ServiceExtension: ServiceExtension[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.GetServiceExtensionsResponse
export interface GetServiceExtensionsResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	ServiceExtensions: ServiceExtensions;
}

