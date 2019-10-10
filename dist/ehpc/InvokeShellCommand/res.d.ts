// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.InstanceIdsInInvokeShellCommand
export interface InstanceIdsInInvokeShellCommand {
	InstanceId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.InvokeShellCommandResponse
export interface InvokeShellCommandResponse {
	RequestId: string;
	CommandId: string;
	InstanceIds: InstanceIdsInInvokeShellCommand;
}

