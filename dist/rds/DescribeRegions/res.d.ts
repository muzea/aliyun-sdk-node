// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.RDSRegion
export interface RDSRegion {
	RegionId: string;
	ZoneId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.RegionsInDescribeRegions
export interface RegionsInDescribeRegions {
	RDSRegion: RDSRegion[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeRegionsResponse
export interface DescribeRegionsResponse {
	RequestId: string;
	Regions: RegionsInDescribeRegions;
}

