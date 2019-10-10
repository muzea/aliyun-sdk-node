// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.BpsModel
export interface BpsModel {
	Bps: number;
	TimeStamp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DataInDescribeDomainRealTimeBpsData
export interface DataInDescribeDomainRealTimeBpsData {
	BpsModel: BpsModel[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeDomainRealTimeBpsDataResponse
export interface DescribeDomainRealTimeBpsDataResponse {
	RequestId: string;
	Data: DataInDescribeDomainRealTimeBpsData;
}

