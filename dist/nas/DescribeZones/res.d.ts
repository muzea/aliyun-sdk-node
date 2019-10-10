// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeZonesCapacity2
export interface DescribeZonesCapacity2 {
	Protocol: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeZonesPerformance2
export interface DescribeZonesPerformance2 {
	Protocol: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeZonesZone1
export interface DescribeZonesZone1 {
	ZoneId: string;
	Capacity: DescribeZonesCapacity2;
	Performance: DescribeZonesPerformance2;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeZonesZones0
export interface DescribeZonesZones0 {
	Zone: DescribeZonesZone1[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeZonesResponse
export interface DescribeZonesResponse {
	RequestId: string;
	Zones: DescribeZonesZones0;
}

