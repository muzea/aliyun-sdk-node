// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.FailDetail
export interface FailDetail {
	Code: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.GetOfficeConversionTaskResponse
export interface GetOfficeConversionTaskResponse {
	RequestId: string;
	TgtType: string;
	Status: string;
	Percent: number;
	PageCount: number;
	TaskId: string;
	TgtUri: string;
	ImageSpec: string;
	NotifyTopicName: string;
	NotifyEndpoint: string;
	ExternalID: string;
	CreateTime: string;
	FinishTime: string;
	SrcUri: string;
	FailDetail: FailDetail;
}

