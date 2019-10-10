// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.ByteHitRateDataModel
export interface ByteHitRateDataModel {
	ByteHitRate: number;
	TimeStamp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.DataInDescribeScdnDomainRealTimeByteHitRateData
export interface DataInDescribeScdnDomainRealTimeByteHitRateData {
	ByteHitRateDataModel: ByteHitRateDataModel[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.DescribeScdnDomainRealTimeByteHitRateDataResponse
export interface DescribeScdnDomainRealTimeByteHitRateDataResponse {
	RequestId: string;
	Data: DataInDescribeScdnDomainRealTimeByteHitRateData;
}

