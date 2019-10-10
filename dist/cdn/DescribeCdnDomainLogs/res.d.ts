// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.PageInfoDetail
export interface PageInfoDetail {
	PageIndex: number;
	PageSize: number;
	Total: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.PageInfos
export interface PageInfos {
	PageInfoDetail: PageInfoDetail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.LogInfoDetail
export interface LogInfoDetail {
	LogName: string;
	LogPath: string;
	LogSize: number;
	StartTime: string;
	EndTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.LogInfos
export interface LogInfos {
	LogInfoDetail: LogInfoDetail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DomainLogDetail
export interface DomainLogDetail {
	DomainName: string;
	LogCount: number;
	PageInfos: PageInfos;
	LogInfos: LogInfos;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DomainLogDetails
export interface DomainLogDetails {
	DomainLogDetail: DomainLogDetail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeCdnDomainLogsResponse
export interface DescribeCdnDomainLogsResponse {
	RequestId: string;
	DomainLogDetails: DomainLogDetails;
}

