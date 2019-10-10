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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.FrameRateAndBitRateInfosInDescribeLiveStreamsFrameRateAndBitRateData
export interface FrameRateAndBitRateInfosInDescribeLiveStreamsFrameRateAndBitRateData {
	FrameRateAndBitRateInfo: FrameRateAndBitRateInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveStreamsFrameRateAndBitRateDataResponse
export interface DescribeLiveStreamsFrameRateAndBitRateDataResponse {
	RequestId: string;
	FrameRateAndBitRateInfos: FrameRateAndBitRateInfosInDescribeLiveStreamsFrameRateAndBitRateData;
}

