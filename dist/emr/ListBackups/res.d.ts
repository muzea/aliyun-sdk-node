// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.AlertUserGroupIdList
export interface AlertUserGroupIdList {
	AlertUserGroupId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.AlertDingDingGroupListInDescribeETLJob
export interface AlertDingDingGroupListInDescribeETLJob {
	AlertDingDingGroup: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.MetadataInfo
export interface MetadataInfo {
	MetadataType: string;
	Properties: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.RoleDTO
export interface RoleDTO {
	Name: string;
	ResourceType: string;
	GmtCreate: string;
	GmtModified: string;
	Id: number;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.RoleDTOListInPageListResourceUsers
export interface RoleDTOListInPageListResourceUsers {
	RoleDTO: RoleDTO[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.Item
export interface Item {
	Name: string;
	EntityGroupId: string;
	Operation: string;
	CreateTime: number;
	AliyunUserId: string;
	QueryId: string;
	Index: number;
	SourceType: string;
	Content: string;
	InstanceId: string;
	UserId: string;
	Md5: string;
	RootPath: string;
	OperatorId: string;
	Id: string;
	Description: string;
	KnoxSyncStatus: string;
	KerberosStutus: string;
	QueryName: string;
	TarFileName: string;
	ClusterId: string;
	Error: string;
	StorePath: string;
	Ts: number;
	BackupPlanId: string;
	BackupMethodType: string;
	GmtCreate: number;
	MetadataType: string;
	EntityId: string;
	RunId: string;
	EntityType: string;
	EventId: string;
	GmtModified: number;
	Enable: boolean;
	UserName: string;
	Status: string;
	LinuxSyncStatus: string;
	AlertUserGroupIdList: AlertUserGroupIdList;
	AlertDingDingGroupList: AlertDingDingGroupListInDescribeETLJob;
	MetadataInfo: MetadataInfo;
	RoleDTOList: RoleDTOListInPageListResourceUsers;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ItemsInListBackups
export interface ItemsInListBackups {
	Item: Item[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListBackupsResponse
export interface ListBackupsResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	Items: ItemsInListBackups;
}

