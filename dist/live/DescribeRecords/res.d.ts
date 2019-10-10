// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.Record
export interface Record {
	RecordId: string;
	AppId: string;
	BoardId: number;
	RecordStartTime: number;
	StartTime: number;
	EndTime: number;
	State: number;
	OssPath: string;
	OssBucket: string;
	OssEndpoint: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeRecordsResponse
export interface DescribeRecordsResponse {
	RequestId: string;
	Records: Record[];
}

