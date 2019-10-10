// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.SlbSubDomain
export interface SlbSubDomain {
	SubDomain: string;
	RecordCount: number;
	Open: boolean;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.SlbSubDomains
export interface SlbSubDomains {
	SlbSubDomain: SlbSubDomain[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DescribeDNSSLBSubDomainsResponse
export interface DescribeDNSSLBSubDomainsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	SlbSubDomains: SlbSubDomains;
}

