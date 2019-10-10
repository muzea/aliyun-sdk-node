// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.JoinPermission
export interface JoinPermission {
	JoinPermissionId: string;
	JoinPermissionName: string;
	JoinPermissionType: string;
	OwnerAliyunPk: string;
	Enabled: boolean;
	ClassMode: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.JoinPermissions
export interface JoinPermissions {
	JoinPermission: JoinPermission[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.QueryLoRaJoinPermissionsResponse
export interface QueryLoRaJoinPermissionsResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	ProductKey: string;
	JoinPermissions: JoinPermissions;
}

