// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.History
export interface History {
	CreationTime: string;
	Status: string;
	Reason: string;
	Comment: string;
	Auditor: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.GetAuditHistoryResponse
export interface GetAuditHistoryResponse {
	RequestId: string;
	Status: string;
	Total: number;
	Histories: History[];
}

