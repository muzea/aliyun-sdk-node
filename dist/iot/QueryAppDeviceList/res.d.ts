// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DataItem
export interface DataItem {
	ProductName: string;
	ProductKey: string;
	DeviceName: string;
	NodeType: number;
	Status: string;
	ActiveTime: string;
	LastOnlineTime: string;
	CreateTime: string;
	ChildDeviceCount: number;
	UtcActiveTime: string;
	UtcLastOnlineTime: string;
	UtcCreateTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DataInQueryAppDeviceList
export interface DataInQueryAppDeviceList {
	DataItem: DataItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.QueryAppDeviceListResponse
export interface QueryAppDeviceListResponse {
	RequestId: string;
	Success: boolean;
	ErrorMessage: string;
	Code: string;
	Page: number;
	PageSize: number;
	PageCount: number;
	Total: number;
	Data: DataInQueryAppDeviceList;
}

