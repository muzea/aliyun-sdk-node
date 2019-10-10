// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DBInstanceParameter
export interface DBInstanceParameter {
	ParameterName: string;
	ParameterDescription: string;
	ParameterValue: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ConfigParameters
export interface ConfigParameters {
	DBInstanceParameter: DBInstanceParameter[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.RunningParameters
export interface RunningParameters {
	DBInstanceParameter: DBInstanceParameter[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeParametersResponse
export interface DescribeParametersResponse {
	RequestId: string;
	Engine: string;
	EngineVersion: string;
	ConfigParameters: ConfigParameters;
	RunningParameters: RunningParameters;
}

