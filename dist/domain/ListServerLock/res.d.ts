// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.QueryTransferInResponse
export interface QueryTransferInResponse {
	GmtCreate: string;
	GmtModified: string;
	UserId: string;
	DomainName: string;
	DomainInstanceId: string;
	LockProductId: string;
	StartDate: string;
	ExpireDate: string;
	LockInstanceId: string;
	ServerLockStatus: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.ListServerLockResponse
export interface ListServerLockResponse {
	RequestId: string;
	TotalItemNum: number;
	CurrentPageNum: number;
	TotalPageNum: number;
	PageSize: number;
	PrePage: boolean;
	NextPage: boolean;
	Data: QueryTransferInResponse[];
}

