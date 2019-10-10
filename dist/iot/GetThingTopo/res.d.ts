// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DeviceInfo
export interface DeviceInfo {
	DeviceName: string;
	GmtCreate: string;
	Nickname: string;
	IotId: string;
	DeviceSecret: string;
	DeviceId: string;
	ProductKey: string;
	DeviceStatus: string;
	GmtModified: string;
	DeviceType: string;
	UtcModified: string;
	UtcCreate: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.ListInGetThingTopo
export interface ListInGetThingTopo {
	deviceInfo: DeviceInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DataInGetThingTopo
export interface DataInGetThingTopo {
	Total: number;
	CurrentPage: number;
	PageSize: number;
	PageCount: number;
	List: ListInGetThingTopo;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.GetThingTopoResponse
export interface GetThingTopoResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	Data: DataInGetThingTopo;
}

