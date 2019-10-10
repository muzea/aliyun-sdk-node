// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.UserListInDescribeChannelParticipants
export interface UserListInDescribeChannelParticipants {
	User: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.DescribeChannelParticipantsResponse
export interface DescribeChannelParticipantsResponse {
	RequestId: string;
	Timestamp: number;
	TotalNum: number;
	TotalPage: number;
	UserList: UserListInDescribeChannelParticipants;
}

