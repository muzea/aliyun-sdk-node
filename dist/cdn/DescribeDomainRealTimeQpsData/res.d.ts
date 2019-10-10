// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.QpsModel
export interface QpsModel {
	Qps: number;
	TimeStamp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DataInDescribeDomainRealTimeQpsData
export interface DataInDescribeDomainRealTimeQpsData {
	QpsModel: QpsModel[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeDomainRealTimeQpsDataResponse
export interface DescribeDomainRealTimeQpsDataResponse {
	RequestId: string;
	Data: DataInDescribeDomainRealTimeQpsData;
}

