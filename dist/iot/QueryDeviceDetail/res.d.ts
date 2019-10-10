// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DataInQueryDeviceDetail
export interface DataInQueryDeviceDetail {
	IotId: string;
	ProductKey: string;
	ProductName: string;
	DeviceName: string;
	DeviceSecret: string;
	FirmwareVersion: string;
	GmtCreate: string;
	UtcCreate: string;
	GmtActive: string;
	UtcActive: string;
	GmtOnline: string;
	UtcOnline: string;
	Status: string;
	IpAddress: string;
	NodeType: number;
	Region: string;
	Owner: boolean;
	Nickname: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.QueryDeviceDetailResponse
export interface QueryDeviceDetailResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	Data: DataInQueryDeviceDetail;
}

