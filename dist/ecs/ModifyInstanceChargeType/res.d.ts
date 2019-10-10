// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.FeeOfInstance
export interface FeeOfInstance {
	InstanceId: string;
	Fee: string;
	Currency: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.FeeOfInstances
export interface FeeOfInstances {
	FeeOfInstance: FeeOfInstance[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.ModifyInstanceChargeTypeResponse
export interface ModifyInstanceChargeTypeResponse {
	RequestId: string;
	OrderId: string;
	FeeOfInstances: FeeOfInstances;
}

