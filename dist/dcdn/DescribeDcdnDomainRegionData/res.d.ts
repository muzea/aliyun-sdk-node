// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.RegionProportionData
export interface RegionProportionData {
	Region: string;
	Proportion: string;
	RegionEname: string;
	AvgObjectSize: string;
	AvgResponseTime: string;
	Bps: string;
	Qps: string;
	AvgResponseRate: string;
	TotalBytes: string;
	BytesProportion: string;
	TotalQuery: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.ValueInDescribeDcdnDomainRegionData
export interface ValueInDescribeDcdnDomainRegionData {
	RegionProportionData: RegionProportionData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DescribeDcdnDomainRegionDataResponse
export interface DescribeDcdnDomainRegionDataResponse {
	RequestId: string;
	DomainName: string;
	DataInterval: string;
	StartTime: string;
	EndTime: string;
	Value: ValueInDescribeDcdnDomainRegionData;
}

