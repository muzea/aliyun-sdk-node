// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ddosbgp.Ipitem
export interface Ipitem {
	Ip: string;
	Product: string;
	Status: string;
	Remark: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ddosbgp.DescribePackIpListResponse
export interface DescribePackIpListResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Total: number;
	IpList: Ipitem[];
}

