// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DataInGetDeviceStatus
export interface DataInGetDeviceStatus {
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.GetDeviceStatusResponse
export interface GetDeviceStatusResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	Data: DataInGetDeviceStatus;
}

