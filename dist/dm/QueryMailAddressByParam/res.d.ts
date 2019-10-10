// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.MailAddress
export interface MailAddress {
	MailAddressId: string;
	AccountName: string;
	ReplyAddress: string;
	Sendtype: string;
	AccountStatus: string;
	ReplyStatus: string;
	CreateTime: string;
	DailyCount: string;
	MonthCount: string;
	DailyReqCount: string;
	MonthReqCount: string;
	DomainStatus: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.DataInQueryMailAddressByParam
export interface DataInQueryMailAddressByParam {
	mailAddress: MailAddress[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.QueryMailAddressByParamResponse
export interface QueryMailAddressByParamResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	data: DataInQueryMailAddressByParam;
}

