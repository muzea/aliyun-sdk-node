// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ddosbgp.Flow
export interface Flow {
	Pps: number;
	FlowType: string;
	Kbps: number;
	Name: string;
	Time: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ddosbgp.DescribeTrafficResponse
export interface DescribeTrafficResponse {
	RequestId: string;
	FlowList: Flow[];
}

