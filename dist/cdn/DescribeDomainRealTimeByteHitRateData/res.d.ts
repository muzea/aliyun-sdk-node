// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.ByteHitRateDataModel
export interface ByteHitRateDataModel {
	ByteHitRate: number;
	TimeStamp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DataInDescribeDomainRealTimeByteHitRateData
export interface DataInDescribeDomainRealTimeByteHitRateData {
	ByteHitRateDataModel: ByteHitRateDataModel[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeDomainRealTimeByteHitRateDataResponse
export interface DescribeDomainRealTimeByteHitRateDataResponse {
	RequestId: string;
	Data: DataInDescribeDomainRealTimeByteHitRateData;
}

