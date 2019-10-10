// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.ByteHitRateDataModel
export interface ByteHitRateDataModel {
	ByteHitRate: number;
	TimeStamp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DataInDescribeDcdnDomainRealTimeByteHitRateData
export interface DataInDescribeDcdnDomainRealTimeByteHitRateData {
	ByteHitRateDataModel: ByteHitRateDataModel[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DescribeDcdnDomainRealTimeByteHitRateDataResponse
export interface DescribeDcdnDomainRealTimeByteHitRateDataResponse {
	RequestId: string;
	Data: DataInDescribeDcdnDomainRealTimeByteHitRateData;
}

