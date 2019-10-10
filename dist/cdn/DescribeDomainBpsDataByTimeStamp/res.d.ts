// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.BpsDataModel
export interface BpsDataModel {
	TimeStamp: string;
	LocationName: string;
	IspName: string;
	Bps: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.BpsDataList
export interface BpsDataList {
	BpsDataModel: BpsDataModel[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeDomainBpsDataByTimeStampResponse
export interface DescribeDomainBpsDataByTimeStampResponse {
	RequestId: string;
	DomainName: string;
	TimeStamp: string;
	BpsDataList: BpsDataList;
}

