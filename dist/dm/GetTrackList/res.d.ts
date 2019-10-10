// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.Stat
export interface Stat {
	RcptUniqueClickRate: string;
	requestCount: string;
	TotalNumber: string;
	unavailablePercent: string;
	succeededPercent: string;
	RcptClickCount: string;
	CreateTime: string;
	RcptOpenRate: string;
	RcptUniqueClickCount: string;
	unavailableCount: string;
	successCount: string;
	RcptClickRate: string;
	RcptOpenCount: string;
	RcptUniqueOpenCount: string;
	faildCount: string;
	RcptUniqueOpenRate: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.DataInGetTrackList
export interface DataInGetTrackList {
	stat: Stat[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.GetTrackListResponse
export interface GetTrackListResponse {
	RequestId: string;
	Total: number;
	PageNo: number;
	PageSize: number;
	OffsetCreateTime: string;
	OffsetCreateTimeDesc: string;
	data: DataInGetTrackList;
}

