// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.AuditInfo
export interface AuditInfo {
	Project: string;
	LogStore: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeInstDbSlsInfoResponse
export interface DescribeInstDbSlsInfoResponse {
	RequestId: string;
	Success: boolean;
	AuditInfo: AuditInfo;
}

