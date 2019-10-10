// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.Input
export interface Input {
	Type: string;
	Workspace: string;
	Name: string;
	Properties: { [key: string]: any };
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.Inputs
export interface Inputs {
	Input: Input[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.Output
export interface Output {
	Type: string;
	Workspace: string;
	Name: string;
	Properties: { [key: string]: any };
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.Outputs
export interface Outputs {
	Output: Output[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.JobInOut
export interface JobInOut {
	Inputs: Inputs;
	Outputs: Outputs;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.ValidateJobResponse
export interface ValidateJobResponse {
	RequestId: string;
	JobInOut: JobInOut;
}

