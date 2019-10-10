// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.DnsHost
export interface DnsHost {
	DnsName: string;
	IpList: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.QueryDnsHostResponse
export interface QueryDnsHostResponse {
	RequestId: string;
	DnsHostList: DnsHost[];
}

