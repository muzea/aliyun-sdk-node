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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.FrameRateAndBitRateInfosInDescribeLiveStreamBitRateData
export interface FrameRateAndBitRateInfosInDescribeLiveStreamBitRateData {
	FrameRateAndBitRateInfo: FrameRateAndBitRateInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveStreamBitRateDataResponse
export interface DescribeLiveStreamBitRateDataResponse {
	RequestId: string;
	FrameRateAndBitRateInfos: FrameRateAndBitRateInfosInDescribeLiveStreamBitRateData;
}

