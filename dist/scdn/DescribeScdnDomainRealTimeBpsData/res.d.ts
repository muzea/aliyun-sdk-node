// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.BpsModel
export interface BpsModel {
	Bps: number;
	TimeStamp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.DataInDescribeScdnDomainRealTimeBpsData
export interface DataInDescribeScdnDomainRealTimeBpsData {
	BpsModel: BpsModel[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.DescribeScdnDomainRealTimeBpsDataResponse
export interface DescribeScdnDomainRealTimeBpsDataResponse {
	RequestId: string;
	Data: DataInDescribeScdnDomainRealTimeBpsData;
}

