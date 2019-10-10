// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DnsServersInDescribeDnsProductInstance
export interface DnsServersInDescribeDnsProductInstance {
	DnsServer: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DescribeDnsProductInstanceResponse
export interface DescribeDnsProductInstanceResponse {
	RequestId: string;
	InstanceId: string;
	VersionCode: string;
	VersionName: string;
	StartTime: string;
	StartTimestamp: number;
	EndTime: string;
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
	DnsServers: DnsServersInDescribeDnsProductInstance;
}

