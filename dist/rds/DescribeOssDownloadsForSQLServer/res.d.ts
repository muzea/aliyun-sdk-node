// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.OssDownload
export interface OssDownload {
	FileSize: string;
	IsAvail: string;
	BackupMode: string;
	Desc: string;
	EndTime: string;
	IsAvailable: string;
	CreateTime: string;
	BakType: string;
	Status: string;
	FileName: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsInDescribeOssDownloadsForSQLServer
export interface ItemsInDescribeOssDownloadsForSQLServer {
	OssDownload: OssDownload[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeOssDownloadsForSQLServerResponse
export interface DescribeOssDownloadsForSQLServerResponse {
	RequestId: string;
	DBInstanceName: string;
	MigrateIaskId: string;
	Items: ItemsInDescribeOssDownloadsForSQLServer;
}

