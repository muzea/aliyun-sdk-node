// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.PositionNormalizedsInDescribeCasterComponents
export interface PositionNormalizedsInDescribeCasterComponents {
	Position: number[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.ComponentLayer
export interface ComponentLayer {
	HeightNormalized: number;
	WidthNormalized: number;
	PositionRefer: string;
	Transparency: number;
	PositionNormalizeds: PositionNormalizedsInDescribeCasterComponents;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.TextLayerContent
export interface TextLayerContent {
	Text: string;
	Color: string;
	FontName: string;
	SizeNormalized: number;
	BorderWidthNormalized: number;
	BorderColor: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.ImageLayerContent
export interface ImageLayerContent {
	MaterialId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.CaptionLayerContent
export interface CaptionLayerContent {
	LocationId: string;
	PtsOffset: number;
	WordsCount: number;
	Color: string;
	FontName: string;
	SizeNormalized: number;
	BorderWidthNormalized: number;
	BorderColor: string;
	WordCountPerLine: number;
	WordSpaceNormalized: number;
	LineSpaceNormalized: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.Component
export interface Component {
	ComponentId: string;
	ComponentName: string;
	LocationId: string;
	ComponentType: string;
	Effect: string;
	ComponentLayer: ComponentLayer;
	TextLayerContent: TextLayerContent;
	ImageLayerContent: ImageLayerContent;
	CaptionLayerContent: CaptionLayerContent;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.Components
export interface Components {
	Component: Component[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeCasterComponentsResponse
export interface DescribeCasterComponentsResponse {
	RequestId: string;
	Total: number;
	Components: Components;
}

