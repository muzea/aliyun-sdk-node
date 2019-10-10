// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.GroupInfo
export interface GroupInfo {
	GroupDesc: string;
	GroupName: string;
	GroupId: string;
	UtcCreate: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.GroupInfos
export interface GroupInfos {
	GroupInfo: GroupInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.QueryDeviceGroupByDeviceResponse
export interface QueryDeviceGroupByDeviceResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	GroupInfos: GroupInfos;
}

