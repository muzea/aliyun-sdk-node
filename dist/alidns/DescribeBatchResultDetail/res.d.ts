// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.BatchResultDetail
export interface BatchResultDetail {
	Domain: string;
	Type: string;
	Rr: string;
	Value: string;
	Status: boolean;
	Reason: string;
	NewRr: string;
	NewValue: string;
	BatchType: string;
	OperateDateStr: string;
	Line: string;
	Priority: string;
	Ttl: string;
	RecordId: string;
	Remark: string;
	RrStatus: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.BatchResultDetails
export interface BatchResultDetails {
	BatchResultDetail: BatchResultDetail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DescribeBatchResultDetailResponse
export interface DescribeBatchResultDetailResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	BatchResultDetails: BatchResultDetails;
}

