// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.Zone
export interface Zone {
	ZoneId: string;
	VpcEnabled: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.Zones
export interface Zones {
	Zone: Zone[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.DdsRegion
export interface DdsRegion {
	RegionId: string;
	ZoneIds: string;
	Zones: Zones;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.Regions
export interface Regions {
	DdsRegion: DdsRegion[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.DescribeRegionsResponse
export interface DescribeRegionsResponse {
	RequestId: string;
	Regions: Regions;
}

