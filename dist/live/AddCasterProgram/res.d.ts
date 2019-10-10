// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.EpisodeId
export interface EpisodeId {
	EpisodeId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.EpisodeIds
export interface EpisodeIds {
	EpisodeId: EpisodeId[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.AddCasterProgramResponse
export interface AddCasterProgramResponse {
	RequestId: string;
	EpisodeIds: EpisodeIds;
}

