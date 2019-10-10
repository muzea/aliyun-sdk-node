// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.ParameterNames
export interface ParameterNames {
	ParameterName: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Command
export interface Command {
	CommandId: string;
	Name: string;
	Type: string;
	Description: string;
	CommandContent: string;
	WorkingDir: string;
	Timeout: number;
	CreationTime: string;
	EnableParameter: boolean;
	ParameterNames: ParameterNames;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Commands
export interface Commands {
	Command: Command[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeCommandsResponse
export interface DescribeCommandsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Commands: Commands;
}

