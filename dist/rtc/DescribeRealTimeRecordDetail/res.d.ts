// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.RecordDetailInfo
export interface RecordDetailInfo {
	Uid: string;
	StartTime: string;
	EndTime: string;
	DeviceType: string;
	SDKVersion: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.RecordDetailInfosInDescribeRealTimeRecordDetail
export interface RecordDetailInfosInDescribeRealTimeRecordDetail {
	RecordDetailInfo: RecordDetailInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.DescribeRealTimeRecordDetailResponse
export interface DescribeRealTimeRecordDetailResponse {
	RequestId: string;
	RecordDetailInfos: RecordDetailInfosInDescribeRealTimeRecordDetail;
}

