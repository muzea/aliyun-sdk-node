// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.CelebrityBoundary
export interface CelebrityBoundary {
	Width: number;
	Height: number;
	Top: number;
	Left: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.CelebrityItem
export interface CelebrityItem {
	CelebrityConfidence: number;
	CelebrityName: string;
	CelebrityLibraryName: string;
	CelebrityNum: number;
	CelebrityGender: string;
	CelebrityBoundary: CelebrityBoundary;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.VideoTagsItem
export interface VideoTagsItem {
	VideoTagName: string;
	VideoTagConfidence: number;
	VideoTagEnName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.PersonsItem
export interface PersonsItem {
	Age: number;
	AgeConfidence: number;
	Gender: string;
	GenderConfidence: number;
	PersonId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.GetVideoResponse
export interface GetVideoResponse {
	RequestId: string;
	SetId: string;
	VideoUri: string;
	RemarksA: string;
	RemarksB: string;
	CreateTime: string;
	ModifyTime: string;
	VideoWidth: number;
	VideoHeight: number;
	VideoFormat: string;
	VideoDuration: number;
	FileSize: number;
	VideoFrames: number;
	SourceType: string;
	SourceUri: string;
	SourcePosition: string;
	ProcessStatus: string;
	ProcessModifyTime: string;
	VideoTagsStatus: string;
	VideoTagsModifyTime: string;
	CelebrityStatus: string;
	CelebrityModifyTime: string;
	ProcessFailReason: string;
	VideoTagsFailReason: string;
	CelebrityFailReason: string;
	RemarksC: string;
	RemarksD: string;
	ExternalId: string;
	Celebrity: CelebrityItem[];
	VideoTags: VideoTagsItem[];
	Persons: PersonsItem[];
}

