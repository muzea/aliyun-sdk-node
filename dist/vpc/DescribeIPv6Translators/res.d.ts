// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.Ipv6TranslatorEntryIds
export interface Ipv6TranslatorEntryIds {
	Ipv6TranslatorEntryId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.Ipv6Translator
export interface Ipv6Translator {
	Ipv6TranslatorId: string;
	CreateTime: number;
	EndTime: number;
	Spec: string;
	Name: string;
	Description: string;
	Status: string;
	BusinessStatus: string;
	PayType: string;
	Bandwidth: number;
	AllocateIpv6Addr: string;
	AllocateIpv4Addr: string;
	AvailableBandwidth: string;
	RegionId: string;
	Ipv6TranslatorEntryIds: Ipv6TranslatorEntryIds;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.Ipv6Translators
export interface Ipv6Translators {
	Ipv6Translator: Ipv6Translator[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeIPv6TranslatorsResponse
export interface DescribeIPv6TranslatorsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Ipv6Translators: Ipv6Translators;
}

