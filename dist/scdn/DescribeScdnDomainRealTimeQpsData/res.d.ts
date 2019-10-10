// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.QpsModel
export interface QpsModel {
	Qps: number;
	TimeStamp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.DataInDescribeScdnDomainRealTimeQpsData
export interface DataInDescribeScdnDomainRealTimeQpsData {
	QpsModel: QpsModel[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/scdn.DescribeScdnDomainRealTimeQpsDataResponse
export interface DescribeScdnDomainRealTimeQpsDataResponse {
	RequestId: string;
	Data: DataInDescribeScdnDomainRealTimeQpsData;
}

