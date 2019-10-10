// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.InvokeInstance
export interface InvokeInstance {
	InstanceId: string;
	InstanceInvokeStatus: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.InvokeInstances
export interface InvokeInstances {
	InvokeInstance: InvokeInstance[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ListInvocationStatusResponse
export interface ListInvocationStatusResponse {
	RequestId: string;
	CommandId: string;
	InvokeStatus: string;
	InvokeInstances: InvokeInstances;
}

