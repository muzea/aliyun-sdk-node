// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/snsuapi.BandOfferListItem
export interface BandOfferListItem {
	OfferId: number;
	Bandwidth: number;
	Duration: number;
	Direction: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/snsuapi.BandOfferList
export interface BandOfferList {
	BandOfferListItem: BandOfferListItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/snsuapi.ResultModule
export interface ResultModule {
	DownloadTarget: number;
	LxOrderId: number;
	DownloadBandwidth: number;
	BandId: number;
	UploadBandwidth: number;
	UploadTarget: number;
	BandOfferList: BandOfferList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/snsuapi.BandPrecheckResponse
export interface BandPrecheckResponse {
	RequestId: string;
	ResultCode: string;
	ResultMessage: string;
	ResultModule: ResultModule;
}

