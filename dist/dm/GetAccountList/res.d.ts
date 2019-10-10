// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.AccountNotificationInfo
export interface AccountNotificationInfo {
	Region: string;
	UpdateTime: string;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.DataInGetAccountList
export interface DataInGetAccountList {
	accountNotificationInfo: AccountNotificationInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.GetAccountListResponse
export interface GetAccountListResponse {
	RequestId: string;
	Total: number;
	PageNo: number;
	PageSize: number;
	data: DataInGetAccountList;
}

