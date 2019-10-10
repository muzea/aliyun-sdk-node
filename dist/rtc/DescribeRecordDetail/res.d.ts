// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.PubDuration
export interface PubDuration {
	Audio: number;
	Video360: number;
	Video720: number;
	Video1080: number;
	Content: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.SubDuration
export interface SubDuration {
	Audio: number;
	Video360: number;
	Video720: number;
	Video1080: number;
	Content: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.Duration
export interface Duration {
	Sd: number;
	All: number;
	Fhd: number;
	Audio: number;
	Hd: number;
	PubDuration: PubDuration;
	SubDuration: SubDuration;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.RecordDetailInfo
export interface RecordDetailInfo {
	Uid: string;
	StartTime: string;
	EndTime: string;
	DeviceType: string;
	SDKVersion: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.RecordDetailInfosInDescribeRecordDetail
export interface RecordDetailInfosInDescribeRecordDetail {
	RecordDetailInfo: RecordDetailInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.DescribeRecordDetailResponse
export interface DescribeRecordDetailResponse {
	RequestId: string;
	Duration: Duration;
	RecordDetailInfos: RecordDetailInfosInDescribeRecordDetail;
}

