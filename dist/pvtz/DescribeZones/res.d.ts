// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/pvtz.Vpc
export interface Vpc {
	RegionId: string;
	VpcName: string;
	VpcId: string;
	RegionName: string;
	ReionId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/pvtz.Vpcs
export interface Vpcs {
	Vpc: Vpc[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/pvtz.Zone
export interface Zone {
	ZoneId: string;
	UpdateTime: string;
	ProxyPattern: string;
	Remark: string;
	CreateTimestamp: number;
	RecordCount: number;
	CreateTime: string;
	ZoneName: string;
	IsPtr: boolean;
	UpdateTimestamp: number;
	Vpcs: Vpcs;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/pvtz.ZonesInDescribeZones
export interface ZonesInDescribeZones {
	Zone: Zone[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/pvtz.DescribeZonesResponse
export interface DescribeZonesResponse {
	RequestId: string;
	TotalItems: number;
	TotalPages: number;
	PageSize: number;
	PageNumber: number;
	Zones: ZonesInDescribeZones;
}

