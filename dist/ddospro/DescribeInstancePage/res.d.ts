// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ddospro.IpInfo
export interface IpInfo {
	Ip: string;
	OrderId: number;
	InstanceId: string;
	Status: number;
	AliUid: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ddospro.InstanceInfo
export interface InstanceInfo {
	InstanceId: string;
	IpList: IpInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ddospro.DescribeInstancePageResponse
export interface DescribeInstancePageResponse {
	RequestId: string;
	Total: number;
	InstanceList: InstanceInfo[];
}

