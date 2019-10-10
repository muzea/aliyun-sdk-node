// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.GroupInfo
export interface GroupInfo {
	GroupDesc: string;
	GroupName: string;
	GroupId: string;
	UtcCreate: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DataInQueryDeviceGroupList
export interface DataInQueryDeviceGroupList {
	GroupInfo: GroupInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.QueryDeviceGroupListResponse
export interface QueryDeviceGroupListResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	CurrentPage: number;
	PageCount: number;
	PageSize: number;
	Total: number;
	Data: DataInQueryDeviceGroupList;
}

