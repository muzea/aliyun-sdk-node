// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.BinLogFile
export interface BinLogFile {
	HostInstanceID: string;
	LogEndTime: string;
	IntranetDownloadLink: string;
	FileSize: number;
	Checksum: string;
	LinkExpiredTime: string;
	LogFileName: string;
	DownloadLink: string;
	LogBeginTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsInDescribeLogBackupFiles
export interface ItemsInDescribeLogBackupFiles {
	BinLogFile: BinLogFile[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeLogBackupFilesResponse
export interface DescribeLogBackupFilesResponse {
	RequestId: string;
	TotalRecordCount: number;
	PageNumber: number;
	PageRecordCount: number;
	TotalFileSize: number;
	Items: ItemsInDescribeLogBackupFiles;
}

