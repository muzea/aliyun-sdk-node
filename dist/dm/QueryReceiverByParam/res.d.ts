// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.Receiver
export interface Receiver {
	ReceiverId: string;
	ReceiversName: string;
	Count: string;
	ReceiversAlias: string;
	Desc: string;
	ReceiversStatus: string;
	CreateTime: string;
	UtcCreateTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.DataInQueryReceiverByParam
export interface DataInQueryReceiverByParam {
	receiver: Receiver[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.QueryReceiverByParamResponse
export interface QueryReceiverByParamResponse {
	RequestId: string;
	TotalCount: number;
	NextStart: string;
	PageSize: number;
	data: DataInQueryReceiverByParam;
}

