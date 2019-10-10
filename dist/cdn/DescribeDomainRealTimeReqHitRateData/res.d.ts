// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.ReqHitRateDataModel
export interface ReqHitRateDataModel {
	ReqHitRate: number;
	TimeStamp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DataInDescribeDomainRealTimeReqHitRateData
export interface DataInDescribeDomainRealTimeReqHitRateData {
	ReqHitRateDataModel: ReqHitRateDataModel[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeDomainRealTimeReqHitRateDataResponse
export interface DescribeDomainRealTimeReqHitRateDataResponse {
	RequestId: string;
	Data: DataInDescribeDomainRealTimeReqHitRateData;
}

