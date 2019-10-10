// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.KVStoreZone
export interface KVStoreZone {
	RegionId: string;
	ZoneId: string;
	ZoneName: string;
	SwitchNetwork: boolean;
	IsRds: boolean;
	Disabled: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.Zones
export interface Zones {
	KVStoreZone: KVStoreZone[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DescribeZonesResponse
export interface DescribeZonesResponse {
	RequestId: string;
	Zones: Zones;
}

