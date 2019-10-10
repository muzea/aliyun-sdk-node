// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.BlendList
export interface BlendList {
	LocationId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.MixListInDescribeCasterLayouts
export interface MixListInDescribeCasterLayouts {
	LocationId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.PositionNormalizedsInDescribeCasterLayouts
export interface PositionNormalizedsInDescribeCasterLayouts {
	Position: number[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.VideoLayer
export interface VideoLayer {
	FillMode: string;
	HeightNormalized: number;
	WidthNormalized: number;
	PositionRefer: string;
	FixedDelayDuration: number;
	PositionNormalizeds: PositionNormalizedsInDescribeCasterLayouts;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.VideoLayers
export interface VideoLayers {
	VideoLayer: VideoLayer[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.AudioLayer
export interface AudioLayer {
	ValidChannel: string;
	FixedDelayDuration: number;
	VolumeRate: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.AudioLayersInDescribeCasterLayouts
export interface AudioLayersInDescribeCasterLayouts {
	AudioLayer: AudioLayer[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.Layout
export interface Layout {
	LayoutId: string;
	BlendList: BlendList;
	MixList: MixListInDescribeCasterLayouts;
	VideoLayers: VideoLayers;
	AudioLayers: AudioLayersInDescribeCasterLayouts;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.Layouts
export interface Layouts {
	Layout: Layout[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeCasterLayoutsResponse
export interface DescribeCasterLayoutsResponse {
	RequestId: string;
	Total: number;
	Layouts: Layouts;
}

