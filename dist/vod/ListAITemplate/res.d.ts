// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.TemplateInfoListItem
export interface TemplateInfoListItem {
	TemplateId: string;
	TemplateType: string;
	TemplateName: string;
	TemplateConfig: string;
	Source: string;
	IsDefault: string;
	CreationTime: string;
	ModifyTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.ListAITemplateResponse
export interface ListAITemplateResponse {
	RequestId: string;
	TemplateInfoList: TemplateInfoListItem[];
}

