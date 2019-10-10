// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.TaskConfig
export interface TaskConfig {
	StartTime: string;
	EndTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DataItem
export interface DataItem {
	TaskId: string;
	UpdateTime: string;
	TaskName: string;
	CreateTime: string;
	DownloadUrl: string;
	Status: string;
	TaskConfig: TaskConfig;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DataInDescribeUserUsageDetailDataExportTask
export interface DataInDescribeUserUsageDetailDataExportTask {
	DataItem: DataItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.UsageDataPerPage
export interface UsageDataPerPage {
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Data: DataInDescribeUserUsageDetailDataExportTask;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeUserUsageDataExportTaskResponse
export interface DescribeUserUsageDataExportTaskResponse {
	RequestId: string;
	UsageDataPerPage: UsageDataPerPage;
}

