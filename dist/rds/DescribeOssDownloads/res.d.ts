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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsInDescribeOssDownloads
export interface ItemsInDescribeOssDownloads {
	OssDownload: OssDownload[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeOssDownloadsResponse
export interface DescribeOssDownloadsResponse {
	RequestId: string;
	DBInstanceId: string;
	MigrateTaskId: string;
	Items: ItemsInDescribeOssDownloads;
}

