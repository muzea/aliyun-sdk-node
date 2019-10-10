// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.TranscodeTemplate
export interface TranscodeTemplate {
	TranscodeTemplateId: string;
	Video: string;
	Audio: string;
	Container: string;
	MuxConfig: string;
	TransConfig: string;
	Definition: string;
	EncryptSetting: string;
	PackageSetting: string;
	SubtitleList: string;
	OpeningList: string;
	TailSlateList: string;
	TemplateName: string;
	TranscodeFileRegular: string;
	Clip: string;
	Rotate: string;
	WatermarkIds: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.TranscodeTemplateGroup
export interface TranscodeTemplateGroup {
	Name: string;
	AppId: string;
	ModifyTime: string;
	TranscodeMode: string;
	CreationTime: string;
	Locked: string;
	IsDefault: string;
	TranscodeTemplateGroupId: string;
	TranscodeTemplateList: TranscodeTemplate[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.ListTranscodeTemplateGroupResponse
export interface ListTranscodeTemplateGroupResponse {
	RequestId: string;
	TranscodeTemplateGroupList: TranscodeTemplateGroup[];
}

