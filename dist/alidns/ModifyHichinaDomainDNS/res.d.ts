// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.OriginalDnsServers
export interface OriginalDnsServers {
	DnsServer: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.NewDnsServers
export interface NewDnsServers {
	DnsServer: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.ModifyHichinaDomainDNSResponse
export interface ModifyHichinaDomainDNSResponse {
	RequestId: string;
	OriginalDnsServers: OriginalDnsServers;
	NewDnsServers: NewDnsServers;
}

