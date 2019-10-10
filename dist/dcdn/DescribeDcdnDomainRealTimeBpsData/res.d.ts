// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.BpsModel
export interface BpsModel {
	Bps: number;
	TimeStamp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DataInDescribeDcdnDomainRealTimeBpsData
export interface DataInDescribeDcdnDomainRealTimeBpsData {
	BpsModel: BpsModel[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DescribeDcdnDomainRealTimeBpsDataResponse
export interface DescribeDcdnDomainRealTimeBpsDataResponse {
	RequestId: string;
	Data: DataInDescribeDcdnDomainRealTimeBpsData;
}

