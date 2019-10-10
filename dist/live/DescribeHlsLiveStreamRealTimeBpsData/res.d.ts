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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.UsageDataPerDomain
export interface UsageDataPerDomain {
	DomainName: string;
	StreamInfos: StreamInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeHlsLiveStreamRealTimeBpsDataResponse
export interface DescribeHlsLiveStreamRealTimeBpsDataResponse {
	Time: string;
	RequestId: string;
	UsageData: UsageDataPerDomain[];
}

