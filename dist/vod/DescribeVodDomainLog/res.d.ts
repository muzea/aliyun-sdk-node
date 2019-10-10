// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.PageInfos
export interface PageInfos {
	PageNumber: number;
	PageSize: number;
	Total: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.LogInfoDetail
export interface LogInfoDetail {
	LogName: string;
	LogPath: string;
	LogSize: number;
	StartTime: string;
	EndTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.LogInfos
export interface LogInfos {
	LogInfoDetail: LogInfoDetail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.DomainLogDetail
export interface DomainLogDetail {
	DomainName: string;
	LogCount: number;
	PageInfos: PageInfos;
	LogInfos: LogInfos;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.DomainLogDetails
export interface DomainLogDetails {
	DomainLogDetail: DomainLogDetail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.DescribeVodDomainLogResponse
export interface DescribeVodDomainLogResponse {
	RequestId: string;
	DomainLogDetails: DomainLogDetails;
}

