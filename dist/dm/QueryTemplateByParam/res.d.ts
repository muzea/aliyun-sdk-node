// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.Template
export interface Template {
	TemplateId: string;
	TemplateName: string;
	TemplateComment: string;
	TemplateStatus: string;
	CreateTime: string;
	UtcCreatetime: number;
	TemplateType: number;
	SmsTemplateCode: number;
	Smsrejectinfo: number;
	SmsStatus: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.DataInQueryTemplateByParam
export interface DataInQueryTemplateByParam {
	template: Template[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.QueryTemplateByParamResponse
export interface QueryTemplateByParamResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	data: DataInQueryTemplateByParam;
}

