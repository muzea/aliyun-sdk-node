// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudauth.VerifyUsage
export interface VerifyUsage {
	BizType: string;
	Date: string;
	TotalCount: number;
	PassCount: number;
	FailCount: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudauth.DescribeVerifyUsageResponse
export interface DescribeVerifyUsageResponse {
	RequestId: string;
	TotalCount: number;
	VerifyUsageList: VerifyUsage[];
}

