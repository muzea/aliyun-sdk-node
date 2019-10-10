// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ApplicationInfo
export interface ApplicationInfo {
	Name: string;
	Tag: string;
	Version: string;
	Required: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ApplicationsInListSoftwares
export interface ApplicationsInListSoftwares {
	ApplicationInfo: ApplicationInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.SoftwareInfo
export interface SoftwareInfo {
	EhpcVersion: string;
	OsTag: string;
	SchedulerType: string;
	SchedulerVersion: string;
	AccountType: string;
	AccountVersion: string;
	Applications: ApplicationsInListSoftwares;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.Softwares
export interface Softwares {
	SoftwareInfo: SoftwareInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ListSoftwaresResponse
export interface ListSoftwaresResponse {
	RequestId: string;
	Softwares: Softwares;
}

