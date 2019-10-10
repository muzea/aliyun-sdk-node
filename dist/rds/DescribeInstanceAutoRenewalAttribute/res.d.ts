// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.RestoreRegions
export interface RestoreRegions {
	RestoreRegion: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.LatencyTopNItem
export interface LatencyTopNItem {
	SQLExecuteTimes: number;
	AvgLatency: number;
	SQLText: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.LatencyTopNItemsInDescribeSQLReports
export interface LatencyTopNItemsInDescribeSQLReports {
	LatencyTopNItem: LatencyTopNItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.QPSTopNItem
export interface QPSTopNItem {
	SQLExecuteTimes: number;
	SQLText: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.QPSTopNItemsInDescribeSQLReports
export interface QPSTopNItemsInDescribeSQLReports {
	QPSTopNItem: QPSTopNItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.Item
export interface Item {
	CrossBackupSetSize: number;
	Category: string;
	DBInstanceDescription: string;
	Engine: string;
	CrossLogBackupId: number;
	CrossDownloadLink: string;
	LogFileName: string;
	ReportTime: string;
	BackupSetStatus: number;
	DBInstanceStatusDesc: string;
	BackupEnabled: string;
	RegionId: string;
	CrossBackupRegion: string;
	Duration: number;
	CrossBackupId: number;
	BackupStartTime: string;
	LinkExpiredTime: string;
	DBInstanceId: string;
	BackupSetScale: number;
	DBInstanceStorageType: string;
	AutoRenew: string;
	CrossLogBackupSize: number;
	LogEndTime: string;
	BackupEnabledTime: string;
	CrossBackupSetFile: string;
	CrossBackupDownloadLink: string;
	EngineVersion: string;
	CrossBackupSetLocation: string;
	LogBackupEnabled: string;
	LogBackupEnabledTime: string;
	BackupEndTime: string;
	BackupMethod: string;
	LogBeginTime: string;
	RelService: string;
	BackupType: string;
	Retention: number;
	DBInstanceStatus: string;
	RetentType: number;
	CrossIntranetDownloadLink: string;
	InstanceId: number;
	ConsistentTime: string;
	CrossBackupType: string;
	Status: string;
	RelServiceId: string;
	LockMode: string;
	RestoreRegions: RestoreRegions;
	LatencyTopNItems: LatencyTopNItemsInDescribeSQLReports;
	QPSTopNItems: QPSTopNItemsInDescribeSQLReports;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsInDescribeInstanceAutoRenewalAttribute
export interface ItemsInDescribeInstanceAutoRenewalAttribute {
	Item: Item[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeInstanceAutoRenewalAttributeResponse
export interface DescribeInstanceAutoRenewalAttributeResponse {
	RequestId: string;
	PageNumber: number;
	TotalRecordCount: number;
	PageRecordCount: number;
	Items: ItemsInDescribeInstanceAutoRenewalAttribute;
}

