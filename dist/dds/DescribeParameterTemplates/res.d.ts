// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.TemplateRecord
export interface TemplateRecord {
	ParameterName: string;
	ParameterValue: string;
	ForceModify: boolean;
	ForceRestart: boolean;
	CheckingCode: string;
	ParameterDescription: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.Parameters
export interface Parameters {
	TemplateRecord: TemplateRecord[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.DescribeParameterTemplatesResponse
export interface DescribeParameterTemplatesResponse {
	RequestId: string;
	Engine: string;
	EngineVersion: string;
	ParameterCount: string;
	Parameters: Parameters;
}

