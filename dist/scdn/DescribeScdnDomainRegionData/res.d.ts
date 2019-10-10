// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.RegionProportionData
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.ValueInDescribeScdnDomainRegionData
export interface ValueInDescribeScdnDomainRegionData {
	RegionProportionData: RegionProportionData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.DescribeScdnDomainRegionDataResponse
export interface DescribeScdnDomainRegionDataResponse {
	RequestId: string;
	DomainName: string;
	DataInterval: string;
	StartTime: string;
	EndTime: string;
	Value: ValueInDescribeScdnDomainRegionData;
}

