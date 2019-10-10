// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.Detail
export interface Detail {
	Email: string;
	CreateTime: string;
	Data: string;
	UtcCreateTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.DataInQueryReceiverDetail
export interface DataInQueryReceiverDetail {
	detail: Detail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.QueryReceiverDetailResponse
export interface QueryReceiverDetailResponse {
	RequestId: string;
	TotalCount: number;
	NextStart: string;
	DataSchema: string;
	data: DataInQueryReceiverDetail;
}

