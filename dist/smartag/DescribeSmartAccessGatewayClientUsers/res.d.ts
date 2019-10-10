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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.UsersInDescribeSmartAccessGatewayClientUsers
export interface UsersInDescribeSmartAccessGatewayClientUsers {
	User: User[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.DescribeSmartAccessGatewayClientUsersResponse
export interface DescribeSmartAccessGatewayClientUsersResponse {
	RequestId: string;
	TotalCount: number;
	PageNo: number;
	PageSize: number;
	Users: UsersInDescribeSmartAccessGatewayClientUsers;
}

