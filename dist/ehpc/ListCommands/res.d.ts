// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.Command
export interface Command {
	CommandId: string;
	CommandContent: string;
	WorkingDir: string;
	Timeout: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.Commands
export interface Commands {
	Command: Command[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ListCommandsResponse
export interface ListCommandsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Commands: Commands;
}

