// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.UsersItem
export interface UsersItem {
	User: string;
	Count: string;
	Status: string;
	CreateTime: string;
	ModifyTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.ListFaceSearchGroupUsersResponse
export interface ListFaceSearchGroupUsersResponse {
	RequestId: string;
	NextMarker: string;
	GroupName: string;
	GroupId: string;
	Users: UsersItem[];
}

