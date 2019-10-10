// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.VideoResource
export interface VideoResource {
	MaterialId: string;
	ResourceId: string;
	ResourceName: string;
	LocationId: string;
	LiveStreamUrl: string;
	RepeatNum: number;
	VodUrl: string;
	BeginOffset: number;
	EndOffset: number;
	PtsCallbackInterval: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.VideoResources
export interface VideoResources {
	VideoResource: VideoResource[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeCasterVideoResourcesResponse
export interface DescribeCasterVideoResourcesResponse {
	RequestId: string;
	Total: number;
	VideoResources: VideoResources;
}

