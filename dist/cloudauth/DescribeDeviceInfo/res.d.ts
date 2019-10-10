// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudauth.DeviceInfo
export interface DeviceInfo {
	DeviceId: string;
	UserDeviceId: string;
	BizType: string;
	BeginDay: string;
	ExpiredDay: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudauth.DeviceInfoList
export interface DeviceInfoList {
	DeviceInfo: DeviceInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudauth.DescribeDeviceInfoResponse
export interface DescribeDeviceInfoResponse {
	RequestId: string;
	PageSize: number;
	CurrentPage: number;
	TotalCount: number;
	DeviceInfoList: DeviceInfoList;
}

