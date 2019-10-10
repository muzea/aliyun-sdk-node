// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.SubAccount
export interface SubAccount {
	AdminUserId: string;
	SubUserId: string;
	Email: string;
	Phone: string;
	AdminUserKp: string;
	SubUserKp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.SubAccountList
export interface SubAccountList {
	SubAccount: SubAccount[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ListSubAccountResponse
export interface ListSubAccountResponse {
	Code: number;
	Message: string;
	RequestId: string;
	SubAccountList: SubAccountList;
}

