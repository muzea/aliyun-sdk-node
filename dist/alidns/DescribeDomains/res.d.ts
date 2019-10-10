// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DnsServersInDescribeDomains
export interface DnsServersInDescribeDomains {
	DnsServer: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.Domain
export interface Domain {
	DomainId: string;
	DomainName: string;
	PunyCode: string;
	AliDomain: boolean;
	RecordCount: number;
	RegistrantEmail: string;
	Remark: string;
	GroupId: string;
	GroupName: string;
	InstanceId: string;
	VersionCode: string;
	VersionName: string;
	InstanceEndTime: string;
	InstanceExpired: boolean;
	DnsServers: DnsServersInDescribeDomains;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.Domains
export interface Domains {
	Domain: Domain[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DescribeDomainsResponse
export interface DescribeDomainsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Domains: Domains;
}

