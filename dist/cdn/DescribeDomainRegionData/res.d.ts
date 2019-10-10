// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.RegionProportionData
export interface RegionProportionData {
	Region: string;
	Proportion: string;
	RegionEname: string;
	AvgObjectSize: string;
	AvgResponseTime: string;
	Bps: string;
	Qps: string;
	AvgResponseRate: string;
	ReqErrRate: string;
	TotalBytes: string;
	BytesProportion: string;
	TotalQuery: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.ValueInDescribeDomainRegionData
export interface ValueInDescribeDomainRegionData {
	RegionProportionData: RegionProportionData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeDomainRegionDataResponse
export interface DescribeDomainRegionDataResponse {
	RequestId: string;
	DomainName: string;
	DataInterval: string;
	StartTime: string;
	EndTime: string;
	Value: ValueInDescribeDomainRegionData;
}

