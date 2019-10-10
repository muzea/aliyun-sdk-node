// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.FCTrigger
export interface FCTrigger {
	EventMetaVersion: string;
	EventMetaName: string;
	TriggerARN: string;
	SourceArn: string;
	Notes: string;
	RoleARN: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.ListFCTriggerResponse
export interface ListFCTriggerResponse {
	RequestId: string;
	FCTriggers: FCTrigger[];
}

