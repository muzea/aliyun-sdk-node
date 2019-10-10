// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.TransferInInfo
export interface TransferInInfo {
	SubmissionDate: string;
	ModificationDate: string;
	UserId: string;
	InstanceId: string;
	DomainName: string;
	Status: number;
	SimpleTransferInStatus: string;
	ResultCode: string;
	ResultDate: string;
	ResultMsg: string;
	TransferAuthorizationCodeSubmissionDate: string;
	NeedMailCheck: boolean;
	Email: string;
	WhoisMailStatus: boolean;
	ExpirationDate: string;
	ProgressBarType: number;
	SubmissionDateLong: number;
	ModificationDateLong: number;
	ResultDateLong: number;
	ExpirationDateLong: number;
	TransferAuthorizationCodeSubmissionDateLong: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.DataInQueryTransferInList
export interface DataInQueryTransferInList {
	TransferInInfo: TransferInInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.QueryTransferInListResponse
export interface QueryTransferInListResponse {
	RequestId: string;
	TotalItemNum: number;
	CurrentPageNum: number;
	TotalPageNum: number;
	PageSize: number;
	PrePage: boolean;
	NextPage: boolean;
	Data: DataInQueryTransferInList;
}

