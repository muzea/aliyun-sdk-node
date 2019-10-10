// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.DSRecord
export interface DSRecord {
	KeyTag: number;
	Algorithm: number;
	DigestType: number;
	Digest: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.QueryDSRecordResponse
export interface QueryDSRecordResponse {
	RequestId: string;
	DSRecordList: DSRecord[];
}

