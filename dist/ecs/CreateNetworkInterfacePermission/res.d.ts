// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.NetworkInterfacePermission
export interface NetworkInterfacePermission {
	Permission: string;
	AccountId: number;
	NetworkInterfaceId: string;
	ServiceName: string;
	NetworkInterfacePermissionId: string;
	PermissionState: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.CreateNetworkInterfacePermissionResponse
export interface CreateNetworkInterfacePermissionResponse {
	RequestId: string;
	NetworkInterfacePermission: NetworkInterfacePermission;
}

