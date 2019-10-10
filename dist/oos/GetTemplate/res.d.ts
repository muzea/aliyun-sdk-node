// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/oos.Template
export interface Template {
	TemplateId: string;
	TotalExecutionCount: number;
	TemplateName: string;
	Hash: string;
	CreatedBy: string;
	TemplateVersion: string;
	TemplateFormat: string;
	UpdatedBy: string;
	CreatedDate: string;
	Description: string;
	UpdatedDate: string;
	Popularity: number;
	ShareType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/oos.GetTemplateResponse
export interface GetTemplateResponse {
	RequestId: string;
	Content: string;
	Template: Template;
}
