// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.EventInDescribeBoards
export interface EventInDescribeBoards {
	BoardId: string;
	Topic: string;
	State: number;
	UserId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeBoardsResponse
export interface DescribeBoardsResponse {
	RequestId: string;
	Boards: EventInDescribeBoards[];
}

