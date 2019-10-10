// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.VideoMeta
export interface VideoMeta {
	CoverURL: string;
	Duration: number;
	Status: string;
	Title: string;
	VideoId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.GetVideoPlayAuthResponse
export interface GetVideoPlayAuthResponse {
	RequestId: string;
	PlayAuth: string;
	VideoMeta: VideoMeta;
}

