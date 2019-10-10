// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.SiteMonitor
export interface SiteMonitor {
	TaskId: string;
	TaskType: string;
	Address: string;
	TaskState: string;
	CreateTime: string;
	TaskName: string;
	Interval: string;
	UpdateTime: string;
	OptionsJson: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.SiteMonitorsInDescribeSiteMonitorList
export interface SiteMonitorsInDescribeSiteMonitorList {
	SiteMonitor: SiteMonitor[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeSiteMonitorListResponse
export interface DescribeSiteMonitorListResponse {
	Code: string;
	Message: string;
	Success: string;
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	SiteMonitors: SiteMonitorsInDescribeSiteMonitorList;
}

