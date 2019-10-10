// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.ReqHitRateDataModel
export interface ReqHitRateDataModel {
	ReqHitRate: number;
	TimeStamp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.DataInDescribeScdnDomainRealTimeReqHitRateData
export interface DataInDescribeScdnDomainRealTimeReqHitRateData {
	ReqHitRateDataModel: ReqHitRateDataModel[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.DescribeScdnDomainRealTimeReqHitRateDataResponse
export interface DescribeScdnDomainRealTimeReqHitRateDataResponse {
	RequestId: string;
	Data: DataInDescribeScdnDomainRealTimeReqHitRateData;
}

