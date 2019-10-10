// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DomainsInDescribeDomainsBySource
export interface DomainsInDescribeDomainsBySource {
	domainNames: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DomainInfo
export interface DomainInfo {
	DomainName: string;
	DomainCname: string;
	CreateTime: string;
	UpdateTime: string;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DomainInfos
export interface DomainInfos {
	domainInfo: DomainInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DomainsData
export interface DomainsData {
	Source: string;
	Domains: DomainsInDescribeDomainsBySource;
	DomainInfos: DomainInfos;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DomainsList
export interface DomainsList {
	DomainsData: DomainsData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeDomainsBySourceResponse
export interface DescribeDomainsBySourceResponse {
	RequestId: string;
	Sources: string;
	DomainsList: DomainsList;
}

