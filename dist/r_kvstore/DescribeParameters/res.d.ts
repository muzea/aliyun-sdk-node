// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.Parameter
export interface Parameter {
	ParameterName: string;
	ModifiableStatus: boolean;
	ParameterDescription: string;
	CheckingCode: string;
	ForceRestart: boolean;
	ParameterValue: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.ConfigParameters
export interface ConfigParameters {
	Parameter: Parameter[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.ParameterInDescribeParameters
export interface ParameterInDescribeParameters {
	ParameterName: string;
	ParameterValue: string;
	ModifiableStatus: string;
	ForceRestart: string;
	CheckingCode: string;
	ParameterDescription: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.RunningParameters
export interface RunningParameters {
	Parameter: ParameterInDescribeParameters[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DescribeParametersResponse
export interface DescribeParametersResponse {
	RequestId: string;
	Engine: string;
	EngineVersion: string;
	ConfigParameters: ConfigParameters;
	RunningParameters: RunningParameters;
}

