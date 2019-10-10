// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.SupportService
export interface SupportService {
	ServiceName: string;
	ServiceDisplayName: string;
	ServiceVersion: string;
	ServiceEcmVersion: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.SupportServiceList
export interface SupportServiceList {
	SupportService: SupportService[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListClusterSupportServiceResponse
export interface ListClusterSupportServiceResponse {
	RequestId: string;
	TotalCount: string;
	PageNumber: string;
	SupportServiceList: SupportServiceList;
}

