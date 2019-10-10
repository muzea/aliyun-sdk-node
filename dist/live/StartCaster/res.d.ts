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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.StreamInfosInStartCaster
export interface StreamInfosInStartCaster {
	StreamInfo: StreamInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.SceneInfo
export interface SceneInfo {
	SceneId: string;
	StreamUrl: string;
	StreamInfos: StreamInfosInStartCaster;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.PvwSceneInfos
export interface PvwSceneInfos {
	SceneInfo: SceneInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.PgmSceneInfos
export interface PgmSceneInfos {
	SceneInfo: SceneInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.StartCasterResponse
export interface StartCasterResponse {
	RequestId: string;
	PvwSceneInfos: PvwSceneInfos;
	PgmSceneInfos: PgmSceneInfos;
}

