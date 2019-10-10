// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.User
export interface User {
	AppUid: string;
	OpStartTime: string;
	OpEndTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeRoomKickoutUserListResponse
export interface DescribeRoomKickoutUserListResponse {
	RequestId: string;
	TotalNum: number;
	TotalPage: number;
	UserList: User[];
}

