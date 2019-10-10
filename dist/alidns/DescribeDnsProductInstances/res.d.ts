// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DnsProduct
export interface DnsProduct {
	InstanceId: string;
	VersionCode: string;
	VersionName: string;
	StartTime: string;
	EndTime: string;
	StartTimestamp: number;
	EndTimestamp: number;
	Domain: string;
	BindCount: number;
	BindUsedCount: number;
	TTLMinValue: number;
	SubDomainLevel: number;
	DnsSLBCount: number;
	URLForwardCount: number;
	DDosDefendFlow: number;
	DDosDefendQuery: number;
	OverseaDDosDefendFlow: number;
	SearchEngineLines: string;
	ISPLines: string;
	ISPRegionLines: string;
	OverseaLine: string;
	MonitorNodeCount: number;
	MonitorFrequency: number;
	MonitorTaskCount: number;
	RegionLines: boolean;
	Gslb: boolean;
	InClean: boolean;
	InBlackHole: boolean;
	BindDomainCount: number;
	BindDomainUsedCount: number;
	DnsSecurity: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DnsProducts
export interface DnsProducts {
	DnsProduct: DnsProduct[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DescribeDnsProductInstancesResponse
export interface DescribeDnsProductInstancesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	DnsProducts: DnsProducts;
}

