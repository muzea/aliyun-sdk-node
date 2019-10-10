// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.Detail
export interface Detail {
	MP4: number;
	FLV: number;
	TS: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.RecordDataInfo
export interface RecordDataInfo {
	Date: string;
	Total: number;
	Detail: Detail;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.RecordDataInfos
export interface RecordDataInfos {
	RecordDataInfo: RecordDataInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveDomainRecordDataResponse
export interface DescribeLiveDomainRecordDataResponse {
	RequestId: string;
	RecordDataInfos: RecordDataInfos;
}

