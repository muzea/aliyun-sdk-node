// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/xtrace.Service
export interface Service {
	ServiceName: string;
	Pid: string;
	RegionId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/xtrace.Services
export interface Services {
	Service: Service[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/xtrace.ListServicesResponse
export interface ListServicesResponse {
	RequestId: string;
	Services: Services;
}

