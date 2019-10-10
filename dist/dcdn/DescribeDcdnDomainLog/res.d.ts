// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.PageInfos
export interface PageInfos {
	PageIndex: number;
	PageSize: number;
	Total: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.LogInfoDetail
export interface LogInfoDetail {
	LogName: string;
	LogPath: string;
	LogSize: number;
	StartTime: string;
	EndTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.LogInfos
export interface LogInfos {
	LogInfoDetail: LogInfoDetail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DomainLogDetail
export interface DomainLogDetail {
	LogCount: number;
	PageInfos: PageInfos;
	LogInfos: LogInfos;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DomainLogDetails
export interface DomainLogDetails {
	DomainLogDetail: DomainLogDetail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DescribeDcdnDomainLogResponse
export interface DescribeDcdnDomainLogResponse {
	RequestId: string;
	DomainName: string;
	DomainLogDetails: DomainLogDetails;
}

