// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.User
export interface User {
	Bandwidth: number;
	UserMail: string;
	UserName: string;
	OnlineTime: string;
	ClientIp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.UsersInDescribeUserOnlineClients
export interface UsersInDescribeUserOnlineClients {
	User: User[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.DescribeUserOnlineClientsResponse
export interface DescribeUserOnlineClientsResponse {
	RequestId: string;
	Users: UsersInDescribeUserOnlineClients;
}

