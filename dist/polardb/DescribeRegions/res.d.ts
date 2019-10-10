// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.Zone
export interface Zone {
	ZoneId: string;
	VpcEnabled: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.Zones
export interface Zones {
	Zone: Zone[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.Region
export interface Region {
	RegionId: string;
	Zones: Zones;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.Regions
export interface Regions {
	Region: Region[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.DescribeRegionsResponse
export interface DescribeRegionsResponse {
	RequestId: string;
	Regions: Regions;
}

