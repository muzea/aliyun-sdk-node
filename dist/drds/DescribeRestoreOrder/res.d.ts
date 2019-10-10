// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DrdsOrderDOListItem
export interface DrdsOrderDOListItem {
	RegionId: string;
	AzoneId: string;
	Network: string;
	VpcId: string;
	VSwtichId: string;
	InstSpec: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DrdsOrderDOList
export interface DrdsOrderDOList {
	DrdsOrderDOListItem: DrdsOrderDOListItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.RdsOrderDOListItem
export interface RdsOrderDOListItem {
	RegionId: string;
	AzoneId: string;
	Engine: string;
	Version: string;
	InstanceClass: string;
	DbInstanceStorage: string;
	Network: string;
	Num: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.RdsOrderDOList
export interface RdsOrderDOList {
	RdsOrderDOListItem: RdsOrderDOListItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.PolarOrderDOListItem
export interface PolarOrderDOListItem {
	RegionId: string;
	AzoneId: string;
	Engine: string;
	Version: string;
	InstanceClass: string;
	DbInstanceStorage: string;
	Network: string;
	Num: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.PolarOrderDOList
export interface PolarOrderDOList {
	PolarOrderDOListItem: PolarOrderDOListItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.RestoreOrderDO
export interface RestoreOrderDO {
	DrdsOrderDOList: DrdsOrderDOList;
	RdsOrderDOList: RdsOrderDOList;
	PolarOrderDOList: PolarOrderDOList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeRestoreOrderResponse
export interface DescribeRestoreOrderResponse {
	RequestId: string;
	Success: boolean;
	RestoreOrderDO: RestoreOrderDO;
}

