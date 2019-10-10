// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.IspProportionData
export interface IspProportionData {
	Isp: string;
	Proportion: string;
	IspEname: string;
	AvgObjectSize: string;
	AvgResponseTime: string;
	Bps: string;
	Qps: string;
	AvgResponseRate: string;
	TotalBytes: string;
	BytesProportion: string;
	TotalQuery: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.ValueInDescribeDcdnDomainIspData
export interface ValueInDescribeDcdnDomainIspData {
	IspProportionData: IspProportionData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DescribeDcdnDomainIspDataResponse
export interface DescribeDcdnDomainIspDataResponse {
	RequestId: string;
	DomainName: string;
	DataInterval: string;
	StartTime: string;
	EndTime: string;
	Value: ValueInDescribeDcdnDomainIspData;
}

