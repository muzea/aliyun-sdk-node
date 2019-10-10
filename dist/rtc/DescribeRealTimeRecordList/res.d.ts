// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.CallAreasInDescribeRealTimeRecordList
export interface CallAreasInDescribeRealTimeRecordList {
	CallArea: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.CommunicationRecordInfo
export interface CommunicationRecordInfo {
	Status: boolean;
	StartTime: string;
	EndTime: string;
	ChannelId: string;
	TotalUserCnt: number;
	RecordId: string;
	OnlineUserCnt: number;
	CallAreas: CallAreasInDescribeRealTimeRecordList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.CommunicationRecordInfosInDescribeRealTimeRecordList
export interface CommunicationRecordInfosInDescribeRealTimeRecordList {
	CommunicationRecordInfo: CommunicationRecordInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.DescribeRealTimeRecordListResponse
export interface DescribeRealTimeRecordListResponse {
	RequestId: string;
	CommunicationRecordInfos: CommunicationRecordInfosInDescribeRealTimeRecordList;
}

