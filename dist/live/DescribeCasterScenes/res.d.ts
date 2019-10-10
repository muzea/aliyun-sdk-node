// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.ComponentIdsInDescribeCasterScenes
export interface ComponentIdsInDescribeCasterScenes {
	componentId: string[];
}

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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.StreamInfosInDescribeCasterScenes
export interface StreamInfosInDescribeCasterScenes {
	StreamInfo: StreamInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.Scene
export interface Scene {
	SceneId: string;
	SceneName: string;
	OutputType: string;
	LayoutId: string;
	StreamUrl: string;
	Status: number;
	ComponentIds: ComponentIdsInDescribeCasterScenes;
	StreamInfos: StreamInfosInDescribeCasterScenes;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.SceneList
export interface SceneList {
	Scene: Scene[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeCasterScenesResponse
export interface DescribeCasterScenesResponse {
	RequestId: string;
	Total: number;
	SceneList: SceneList;
}

