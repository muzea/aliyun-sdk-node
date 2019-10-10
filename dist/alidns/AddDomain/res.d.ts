// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DnsServersInAddDomain
export interface DnsServersInAddDomain {
	DnsServer: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.AddDomainResponse
export interface AddDomainResponse {
	RequestId: string;
	DomainId: string;
	DomainName: string;
	PunyCode: string;
	GroupId: string;
	GroupName: string;
	DnsServers: DnsServersInAddDomain;
}

