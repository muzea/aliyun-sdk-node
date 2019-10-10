// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.MixListInDescribeCasterSceneAudio
export interface MixListInDescribeCasterSceneAudio {
	LocationId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.AudioLayer
export interface AudioLayer {
	ValidChannel: string;
	FixedDelayDuration: number;
	VolumeRate: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.AudioLayersInDescribeCasterSceneAudio
export interface AudioLayersInDescribeCasterSceneAudio {
	AudioLayer: AudioLayer[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeCasterSceneAudioResponse
export interface DescribeCasterSceneAudioResponse {
	RequestId: string;
	CasterId: string;
	FollowEnable: number;
	MixList: MixListInDescribeCasterSceneAudio;
	AudioLayers: AudioLayersInDescribeCasterSceneAudio;
}

