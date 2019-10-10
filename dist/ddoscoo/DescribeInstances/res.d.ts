// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ddoscoo.Instance
export interface Instance {
	InstanceId: string;
	Remark: string;
	Status: number;
	DebtStatus: number;
	ExpireTime: number;
	GmtCreate: number;
	Edition: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ddoscoo.DescribeInstancesResponse
export interface DescribeInstancesResponse {
	RequestId: string;
	Total: number;
	Instances: Instance[];
}

