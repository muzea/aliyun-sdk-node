// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.Ipv6TranslatorEntry
export interface Ipv6TranslatorEntry {
	Ipv6TranslatorId: string;
	Ipv6TranslatorEntryId: string;
	AllocateIpv6Addr: string;
	AllocateIpv6Port: number;
	BackendIpv4Addr: string;
	BackendIpv4Port: string;
	TransProtocol: string;
	EntryBandwidth: string;
	EntryDescription: string;
	EntryName: string;
	EntryStatus: string;
	AclStatus: string;
	AclType: string;
	AclId: string;
	RegionId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.Ipv6TranslatorEntries
export interface Ipv6TranslatorEntries {
	Ipv6TranslatorEntry: Ipv6TranslatorEntry[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeIPv6TranslatorEntriesResponse
export interface DescribeIPv6TranslatorEntriesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Ipv6TranslatorEntries: Ipv6TranslatorEntries;
}

