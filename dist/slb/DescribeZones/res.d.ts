// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.SlaveZone
export interface SlaveZone {
	ZoneId: string;
	LocalName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.SlaveZones
export interface SlaveZones {
	SlaveZone: SlaveZone[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.Zone
export interface Zone {
	ZoneId: string;
	LocalName: string;
	SlaveZones: SlaveZones;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.Zones
export interface Zones {
	Zone: Zone[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.DescribeZonesResponse
export interface DescribeZonesResponse {
	RequestId: string;
	Zones: Zones;
}

