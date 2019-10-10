// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.JobTemplates
export interface JobTemplates {
	Id: string;
	Name: string;
	CommandLine: string;
	RunasUser: string;
	Priority: number;
	PackagePath: string;
	StdoutRedirectPath: string;
	StderrRedirectPath: string;
	ReRunable: boolean;
	ArrayRequest: string;
	Variables: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.Templates
export interface Templates {
	JobTemplates: JobTemplates[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ListJobTemplatesResponse
export interface ListJobTemplatesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Templates: Templates;
}

