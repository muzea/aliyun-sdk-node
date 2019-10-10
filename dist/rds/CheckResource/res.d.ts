// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.Resource
export interface Resource {
	DBInstanceAvailable: string;
	Engine: string;
	EngineVersion: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.Resources
export interface Resources {
	Resource: Resource[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.CheckResourceResponse
export interface CheckResourceResponse {
	RequestId: string;
	SpecifyCount: string;
	Resources: Resources;
}

