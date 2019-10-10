// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.Info
export interface Info {
	Online: number;
	DownFlow: number;
	TranscodeTemplate: string;
	Rate: string;
	UserNumber: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.StreamInfo
export interface StreamInfo {
	VideoFormat: string;
	TranscodeConfig: string;
	OutputStreamUrl: string;
	StreamName: string;
	Infos: Info[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.StreamInfosInDescribeCasterStreamUrl
export interface StreamInfosInDescribeCasterStreamUrl {
	StreamInfo: StreamInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.CasterStream
export interface CasterStream {
	SceneId: string;
	StreamUrl: string;
	RtmpUrl: string;
	OutputType: number;
	StreamInfos: StreamInfosInDescribeCasterStreamUrl;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.CasterStreams
export interface CasterStreams {
	CasterStream: CasterStream[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeCasterStreamUrlResponse
export interface DescribeCasterStreamUrlResponse {
	RequestId: string;
	CasterId: string;
	Total: number;
	CasterStreams: CasterStreams;
}

