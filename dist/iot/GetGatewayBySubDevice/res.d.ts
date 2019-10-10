// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DataInGetGatewayBySubDevice
export interface DataInGetGatewayBySubDevice {
	ProductKey: string;
	ProductName: string;
	DeviceSecret: string;
	DeviceName: string;
	FirmwareVersion: string;
	GmtCreate: string;
	UtcCreate: string;
	GmtActive: string;
	UtcActive: string;
	GmtOnline: string;
	UtcOnline: string;
	Status: string;
	IpAddress: string;
	NodeType: string;
	region: string;
	iotId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.GetGatewayBySubDeviceResponse
export interface GetGatewayBySubDeviceResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	Data: DataInGetGatewayBySubDevice;
}

