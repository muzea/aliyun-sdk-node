// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.BpsDataModel
export interface BpsDataModel {
	TimeStamp: string;
	LocationName: string;
	IspName: string;
	Bps: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.BpsDataList
export interface BpsDataList {
	BpsDataModel: BpsDataModel[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveDomainBpsDataByTimeStampResponse
export interface DescribeLiveDomainBpsDataByTimeStampResponse {
	RequestId: string;
	DomainName: string;
	TimeStamp: string;
	BpsDataList: BpsDataList;
}

