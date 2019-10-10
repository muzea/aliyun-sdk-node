// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.InstanceSLAInfo
export interface InstanceSLAInfo {
	InstanceId: string;
	UptimePct: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.InstanceSLAInfos
export interface InstanceSLAInfos {
	InstanceSLAInfo: InstanceSLAInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DescribeMonthlyServiceStatusResponse
export interface DescribeMonthlyServiceStatusResponse {
	RequestId: string;
	TotalCount: number;
	InstanceSLAInfos: InstanceSLAInfos;
}

