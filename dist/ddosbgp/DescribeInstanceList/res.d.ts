// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ddosbgp.Instance
export interface Instance {
	ExpireTime: number;
	InstanceId: string;
	Product: string;
	Remark: string;
	Status: string;
	IpType: string;
	AutoRenewal: boolean;
	BlackholdingCount: string;
	GmtCreate: number;
	InstanceType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ddosbgp.DescribeInstanceListResponse
export interface DescribeInstanceListResponse {
	RequestId: string;
	Total: number;
	InstanceList: Instance[];
}

