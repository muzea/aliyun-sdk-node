// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DnsServersInDescribeDomainInfo
export interface DnsServersInDescribeDomainInfo {
	DnsServer: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.AvailableTtls
export interface AvailableTtls {
	AvailableTtl: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.RecordLine
export interface RecordLine {
	LineDisplayName: string;
	LineCode: string;
	LineName: string;
	FatherCode: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.RecordLinesInDescribeDomainInfo
export interface RecordLinesInDescribeDomainInfo {
	RecordLine: RecordLine[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DescribeDomainInfoResponse
export interface DescribeDomainInfoResponse {
	RequestId: string;
	DomainId: string;
	DomainName: string;
	PunyCode: string;
	AliDomain: boolean;
	Remark: string;
	GroupId: string;
	GroupName: string;
	InstanceId: string;
	VersionCode: string;
	VersionName: string;
	MinTtl: number;
	RecordLineTreeJson: string;
	LineType: string;
	RegionLines: boolean;
	InBlackHole: boolean;
	InClean: boolean;
	SlaveDns: boolean;
	DnsServers: DnsServersInDescribeDomainInfo;
	AvailableTtls: AvailableTtls;
	RecordLines: RecordLinesInDescribeDomainInfo;
}

