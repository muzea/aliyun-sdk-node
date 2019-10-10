// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.LifecycleHook
export interface LifecycleHook {
	ScalingGroupId: string;
	LifecycleHookId: string;
	LifecycleHookName: string;
	DefaultResult: string;
	HeartbeatTimeout: number;
	LifecycleTransition: string;
	NotificationMetadata: string;
	NotificationArn: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.LifecycleHooks
export interface LifecycleHooks {
	LifecycleHook: LifecycleHook[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.DescribeLifecycleHooksResponse
export interface DescribeLifecycleHooksResponse {
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	RequestId: string;
	LifecycleHooks: LifecycleHooks;
}

