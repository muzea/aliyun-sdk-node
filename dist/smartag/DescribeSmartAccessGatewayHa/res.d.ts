// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.LinkBackupInfoListItem
export interface LinkBackupInfoListItem {
	LinkLevelBackupState: string;
	LinkLevelBackupType: string;
	MainLinkId: string;
	MainLinkState: string;
	BackupLinkId: string;
	BackupLinkState: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.LinkBackupInfoList
export interface LinkBackupInfoList {
	LinkBackupInfoListItem: LinkBackupInfoListItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.DescribeSmartAccessGatewayHaResponse
export interface DescribeSmartAccessGatewayHaResponse {
	RequestId: string;
	DeviceLevelBackupState: string;
	DeviceLevelBackupType: string;
	MainDeviceId: string;
	BackupDeviceId: string;
	SmartAGId: string;
	LinkBackupInfoList: LinkBackupInfoList;
}

