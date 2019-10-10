// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.User
export interface User {
	Id: number;
	UserName: string;
	DisplayName: string;
	CreateTime: string;
	UpdateTime: string;
	Description: string;
	AliUid: string;
	RoleName: string;
	LoginUserType: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.DataInListUsers
export interface DataInListUsers {
	User: User[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/qualitycheck.ListUsersResponse
export interface ListUsersResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	PageNumber: number;
	PageSize: number;
	Count: number;
	Data: DataInListUsers;
}

