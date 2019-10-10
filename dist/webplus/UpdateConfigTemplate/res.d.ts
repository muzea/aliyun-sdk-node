// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.ConfigTemplate
export interface ConfigTemplate {
	TemplateId: string;
	PkgVersionLabel: string;
	AppId: string;
	TemplateName: string;
	PkgVersionId: string;
	UpdateTime: number;
	CreateTime: number;
	AppName: string;
	TemplateType: string;
	TemplateDescription: string;
	StackId: string;
	StackName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.UpdateConfigTemplateResponse
export interface UpdateConfigTemplateResponse {
	RequestId: string;
	Code: string;
	Message: string;
	ConfigTemplate: ConfigTemplate;
}

