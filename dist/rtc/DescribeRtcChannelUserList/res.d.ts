// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.UserListItem
export interface UserListItem {
	ChannelId: string;
	UserId: string;
	StartTime: string;
	EndTime: string;
	ServiceArea: string;
	SubAudio: number;
	PubAudio: number;
	SubVideo360: number;
	PubVideo360: number;
	SubVideo720: number;
	PubVideo720: number;
	SubVideo1080: number;
	PubVideo1080: number;
	SubContent: number;
	PubContent: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.UserListInDescribeRtcChannelUserList
export interface UserListInDescribeRtcChannelUserList {
	UserListItem: UserListItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.DescribeRtcChannelUserListResponse
export interface DescribeRtcChannelUserListResponse {
	RequestId: string;
	PageSize: number;
	PageNo: number;
	TotalCnt: number;
	UserList: UserListInDescribeRtcChannelUserList;
}

