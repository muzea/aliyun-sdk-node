// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.Parameter
export interface Parameter {
	ParameterName: string;
	DataType: string;
	DefaultParameterValue: string;
	ParameterValue: string;
	IsModifiable: boolean;
	ForceRestart: boolean;
	ParameterStatus: string;
	CheckingCode: string;
	ParameterDescription: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.RunningParameters
export interface RunningParameters {
	Parameter: Parameter[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.DescribeDBClusterParametersResponse
export interface DescribeDBClusterParametersResponse {
	RequestId: string;
	Engine: string;
	DBType: string;
	DBVersion: string;
	RunningParameters: RunningParameters;
}

