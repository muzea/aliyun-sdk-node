// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.FrameRateAndBitRateInfo
export interface FrameRateAndBitRateInfo {
	BitRate: number;
	Time: string;
	VideoFrameRate: number;
	AudioFrameRate: number;
	StreamUrl: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.FrameRateAndBitRateInfosInDescribeLiveDomainFrameRateAndBitRateData
export interface FrameRateAndBitRateInfosInDescribeLiveDomainFrameRateAndBitRateData {
	FrameRateAndBitRateInfo: FrameRateAndBitRateInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveDomainFrameRateAndBitRateDataResponse
export interface DescribeLiveDomainFrameRateAndBitRateDataResponse {
	RequestId: string;
	FrameRateAndBitRateInfos: FrameRateAndBitRateInfosInDescribeLiveDomainFrameRateAndBitRateData;
}

