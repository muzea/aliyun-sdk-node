// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.Data
export interface Data {
	Logs: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeVpnSslServerLogsResponse
export interface DescribeVpnSslServerLogsResponse {
	RequestId: string;
	Count: number;
	IsCompleted: boolean;
	PageNumber: number;
	PageSize: number;
	Data: Data;
}

