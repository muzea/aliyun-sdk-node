// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.TemplateRecord
export interface TemplateRecord {
	ParameterName: string;
	ParameterValue: string;
	ForceModify: string;
	ForceRestart: string;
	CheckingCode: string;
	ParameterDescription: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.Parameters
export interface Parameters {
	TemplateRecord: TemplateRecord[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeParameterTemplatesResponse
export interface DescribeParameterTemplatesResponse {
	RequestId: string;
	Engine: string;
	EngineVersion: string;
	ParameterCount: string;
	Parameters: Parameters;
}

