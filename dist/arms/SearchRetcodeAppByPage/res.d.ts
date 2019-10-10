// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/arms.RetcodeApp
export interface RetcodeApp {
	AppId: number;
	RegionId: string;
	UpdateTime: number;
	Pid: string;
	UserId: string;
	CreateTime: number;
	AppName: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/arms.Contact
export interface Contact {
	ContactId: number;
	ContactName: string;
	Phone: string;
	Email: string;
	UserId: string;
	DingRobot: string;
	CreateTime: number;
	UpdateTime: number;
	SystemNoc: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/arms.TraceApp
export interface TraceApp {
	AppId: number;
	RegionId: string;
	UpdateTime: number;
	Pid: string;
	UserId: string;
	CreateTime: number;
	AppName: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/arms.PageBean
export interface PageBean {
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	RetcodeApps: RetcodeApp[];
	Contacts: Contact[];
	TraceApps: TraceApp[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/arms.SearchRetcodeAppByPageResponse
export interface SearchRetcodeAppByPageResponse {
	RequestId: string;
	PageBean: PageBean;
}

