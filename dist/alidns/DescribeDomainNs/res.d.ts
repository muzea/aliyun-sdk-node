// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DnsServersInDescribeDomainNs
export interface DnsServersInDescribeDomainNs {
	DnsServer: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.ExpectDnsServers
export interface ExpectDnsServers {
	ExpectDnsServer: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DescribeDomainNsResponse
export interface DescribeDomainNsResponse {
	RequestId: string;
	AllAliDns: boolean;
	IncludeAliDns: boolean;
	DnsServers: DnsServersInDescribeDomainNs;
	ExpectDnsServers: ExpectDnsServers;
}

