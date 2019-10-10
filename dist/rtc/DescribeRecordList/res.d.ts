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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.CommunicationRecordInfosInDescribeRecordList
export interface CommunicationRecordInfosInDescribeRecordList {
	CommunicationRecordInfo: CommunicationRecordInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.DescribeRecordListResponse
export interface DescribeRecordListResponse {
	RequestId: string;
	PageSize: number;
	PageNo: number;
	TotalCnt: number;
	CommunicationRecordInfos: CommunicationRecordInfosInDescribeRecordList;
}

