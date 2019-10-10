// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.Room
export interface Room {
	AnchorId: string;
	OpEndTime: string;
	OpStartTime: string;
	CreateTime: string;
	RoomStatus: number;
	RoomId: string;
	ForbidStream: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeRoomListResponse
export interface DescribeRoomListResponse {
	RequestId: string;
	TotalNum: number;
	TotalPage: number;
	RoomList: Room[];
}

