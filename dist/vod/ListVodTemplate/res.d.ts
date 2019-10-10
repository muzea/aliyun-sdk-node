// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.VodTemplateInfo
export interface VodTemplateInfo {
	Name: string;
	AppId: string;
	ModifyTime: string;
	VodTemplateId: string;
	CreationTime: string;
	IsDefault: string;
	TemplateConfig: string;
	TemplateType: string;
	SubTemplateType: string;
	Source: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.ListVodTemplateResponse
export interface ListVodTemplateResponse {
	RequestId: string;
	VodTemplateInfoList: VodTemplateInfo[];
}

