// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.Zone
export interface Zone {
	ZoneId: string;
	LocalName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.Zones
export interface Zones {
	Zone: Zone[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeZonesResponse
export interface DescribeZonesResponse {
	RequestId: string;
	Zones: Zones;
}

