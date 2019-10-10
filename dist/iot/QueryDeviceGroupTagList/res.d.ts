// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.GroupTagInfo
export interface GroupTagInfo {
	TagKey: string;
	TagValue: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DataInQueryDeviceGroupTagList
export interface DataInQueryDeviceGroupTagList {
	GroupTagInfo: GroupTagInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.QueryDeviceGroupTagListResponse
export interface QueryDeviceGroupTagListResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	Data: DataInQueryDeviceGroupTagList;
}

