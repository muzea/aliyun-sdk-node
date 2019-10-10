// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.Detail
export interface Detail {
	Email: string;
	CreateTime: string;
	Data: string;
	UtcCreateTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.DataInSaveReceiverDetail
export interface DataInSaveReceiverDetail {
	Detail: Detail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.SaveReceiverDetailResponse
export interface SaveReceiverDetailResponse {
	RequestId: string;
	SuccessCount: number;
	ErrorCount: number;
	Data: DataInSaveReceiverDetail;
}

