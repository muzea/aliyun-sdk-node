// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.GroupInfo
export interface GroupInfo {
	GroupDesc: string;
	GroupName: string;
	GroupId: string;
	UtcCreate: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DataInQuerySuperDeviceGroup
export interface DataInQuerySuperDeviceGroup {
	GroupInfo: GroupInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.QuerySuperDeviceGroupResponse
export interface QuerySuperDeviceGroupResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	Data: DataInQuerySuperDeviceGroup;
}

