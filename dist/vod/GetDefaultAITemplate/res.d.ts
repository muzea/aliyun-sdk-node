// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.TemplateInfo
export interface TemplateInfo {
	TemplateId: string;
	ModifyTime: string;
	TemplateName: string;
	CreationTime: string;
	TemplateConfig: string;
	IsDefault: string;
	TemplateType: string;
	Source: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.GetDefaultAITemplateResponse
export interface GetDefaultAITemplateResponse {
	RequestId: string;
	TemplateInfo: TemplateInfo;
}

