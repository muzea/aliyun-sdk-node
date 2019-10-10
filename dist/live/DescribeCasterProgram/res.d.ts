// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.ComponentIdsInDescribeCasterProgram
export interface ComponentIdsInDescribeCasterProgram {
	ComponentId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.Episode
export interface Episode {
	EpisodeId: string;
	EpisodeType: string;
	EpisodeName: string;
	ResourceId: string;
	StartTime: string;
	EndTime: string;
	SwitchType: string;
	Status: number;
	ComponentIds: ComponentIdsInDescribeCasterProgram;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.Episodes
export interface Episodes {
	Episode: Episode[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeCasterProgramResponse
export interface DescribeCasterProgramResponse {
	RequestId: string;
	CasterId: string;
	ProgramName: string;
	ProgramEffect: number;
	Total: number;
	Episodes: Episodes;
}

