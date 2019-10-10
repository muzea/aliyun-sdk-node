// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dysmsapi.SmsSendDetailDTO
export interface SmsSendDetailDTO {
	PhoneNum: string;
	SendStatus: number;
	ErrCode: string;
	TemplateCode: string;
	Content: string;
	SendDate: string;
	ReceiveDate: string;
	OutId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dysmsapi.SmsSendDetailDTOs
export interface SmsSendDetailDTOs {
	SmsSendDetailDTO: SmsSendDetailDTO[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dysmsapi.QuerySendDetailsResponse
export interface QuerySendDetailsResponse {
	RequestId: string;
	Code: string;
	Message: string;
	TotalCount: string;
	SmsSendDetailDTOs: SmsSendDetailDTOs;
}

