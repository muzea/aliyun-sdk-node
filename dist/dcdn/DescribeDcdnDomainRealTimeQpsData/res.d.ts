// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.QpsModel
export interface QpsModel {
	Qps: number;
	TimeStamp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DataInDescribeDcdnDomainRealTimeQpsData
export interface DataInDescribeDcdnDomainRealTimeQpsData {
	QpsModel: QpsModel[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dcdn.DescribeDcdnDomainRealTimeQpsDataResponse
export interface DescribeDcdnDomainRealTimeQpsDataResponse {
	RequestId: string;
	Data: DataInDescribeDcdnDomainRealTimeQpsData;
}

