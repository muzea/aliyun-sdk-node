// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.CallArea
export interface CallArea {
	CallArea: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.ChannelListItem
export interface ChannelListItem {
	ChannelId: string;
	StartTime: string;
	EndTime: string;
	TotalUserCnt: number;
	CallArea: CallArea;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.ChannelList
export interface ChannelList {
	ChannelListItem: ChannelListItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.DescribeRtcChannelListResponse
export interface DescribeRtcChannelListResponse {
	RequestId: string;
	PageSize: number;
	PageNo: number;
	TotalCnt: number;
	ChannelList: ChannelList;
}

