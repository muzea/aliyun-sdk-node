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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.NetworkInterfacePermissions
export interface NetworkInterfacePermissions {
	NetworkInterfacePermission: NetworkInterfacePermission[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeNetworkInterfacePermissionsResponse
export interface DescribeNetworkInterfacePermissionsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	NetworkInterfacePermissions: NetworkInterfacePermissions;
}

