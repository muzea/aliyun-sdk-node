// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.CollationTimeZone
export interface CollationTimeZone {
	TimeZone: string;
	StandardTimeOffset: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.CollationTimeZones
export interface CollationTimeZones {
	CollationTimeZone: CollationTimeZone[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeCollationTimeZonesResponse
export interface DescribeCollationTimeZonesResponse {
	RequestId: string;
	CollationTimeZones: CollationTimeZones;
}

