// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.ValidList
export interface ValidList {
	Name: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.InvalidList
export interface InvalidList {
	Name: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DataInQueryBatchRegisterDeviceStatus
export interface DataInQueryBatchRegisterDeviceStatus {
	Status: string;
	ValidList: ValidList;
	InvalidList: InvalidList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.QueryBatchRegisterDeviceStatusResponse
export interface QueryBatchRegisterDeviceStatusResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	Data: DataInQueryBatchRegisterDeviceStatus;
}

