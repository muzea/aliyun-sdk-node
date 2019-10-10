// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.Channel
export interface Channel {
	ChannelId: string;
	ResourceId: string;
	StreamUrl: string;
	RtmpUrl: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.Channels
export interface Channels {
	Channel: Channel[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeCasterChannelsResponse
export interface DescribeCasterChannelsResponse {
	RequestId: string;
	Total: number;
	Channels: Channels;
}

