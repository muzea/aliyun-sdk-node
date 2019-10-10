// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.HiStoreInstanceInfo
export interface HiStoreInstanceInfo {
	HistoreInstanceId: string;
	GmtCreate: number;
	RpmVersion: string;
	DiskSize: number;
	MachineSpec: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeHiStoreInstanceInfoResponse
export interface DescribeHiStoreInstanceInfoResponse {
	RequestId: string;
	Success: boolean;
	HiStoreInstanceInfo: HiStoreInstanceInfo;
}

