// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.MailDetail
export interface MailDetail {
	Status: number;
	UtcLastUpdateTime: string;
	ToAddress: string;
	Message: string;
	LastUpdateTime: string;
	AccountName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.DataInSenderStatisticsDetailByParam
export interface DataInSenderStatisticsDetailByParam {
	mailDetail: MailDetail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.SenderStatisticsDetailByParamResponse
export interface SenderStatisticsDetailByParamResponse {
	RequestId: string;
	NextStart: number;
	data: DataInSenderStatisticsDetailByParam;
}

