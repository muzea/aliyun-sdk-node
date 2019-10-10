// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.PageInfoDetail
export interface PageInfoDetail {
	PageIndex: number;
	PageSize: number;
	Total: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.PageInfos
export interface PageInfos {
	PageInfoDetail: PageInfoDetail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.LogInfoDetail
export interface LogInfoDetail {
	LogName: string;
	LogPath: string;
	LogSize: number;
	StartTime: string;
	EndTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.LogInfos
export interface LogInfos {
	LogInfoDetail: LogInfoDetail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.DomainLogDetail
export interface DomainLogDetail {
	LogCount: number;
	PageInfos: PageInfos;
	LogInfos: LogInfos;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.DomainLogDetails
export interface DomainLogDetails {
	DomainLogDetail: DomainLogDetail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.DescribeScdnDomainLogResponse
export interface DescribeScdnDomainLogResponse {
	RequestId: string;
	DomainName: string;
	DomainLogDetails: DomainLogDetails;
}

