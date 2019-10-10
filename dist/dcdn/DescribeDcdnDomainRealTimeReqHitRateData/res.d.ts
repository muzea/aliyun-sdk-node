// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.ReqHitRateDataModel
export interface ReqHitRateDataModel {
	ReqHitRate: number;
	TimeStamp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DataInDescribeDcdnDomainRealTimeReqHitRateData
export interface DataInDescribeDcdnDomainRealTimeReqHitRateData {
	ReqHitRateDataModel: ReqHitRateDataModel[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DescribeDcdnDomainRealTimeReqHitRateDataResponse
export interface DescribeDcdnDomainRealTimeReqHitRateDataResponse {
	RequestId: string;
	Data: DataInDescribeDcdnDomainRealTimeReqHitRateData;
}

