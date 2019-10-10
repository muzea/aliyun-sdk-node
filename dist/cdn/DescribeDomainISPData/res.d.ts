// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.ISPProportionData
export interface ISPProportionData {
	ISP: string;
	Proportion: string;
	IspEname: string;
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.ValueInDescribeDomainISPData
export interface ValueInDescribeDomainISPData {
	ISPProportionData: ISPProportionData[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeDomainISPDataResponse
export interface DescribeDomainISPDataResponse {
	RequestId: string;
	DomainName: string;
	DataInterval: string;
	StartTime: string;
	EndTime: string;
	Value: ValueInDescribeDomainISPData;
}

