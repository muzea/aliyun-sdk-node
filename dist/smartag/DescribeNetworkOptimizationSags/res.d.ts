// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.SnatEntry
export interface SnatEntry {
	CidrBlock: string;
	SnatIp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.SnatEntries
export interface SnatEntries {
	SnatEntry: SnatEntry[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.SmartAccessGateway
export interface SmartAccessGateway {
	Name: string;
	MaxBandwidth: string;
	SoftwareVersion: string;
	HardwareVersion: string;
	CreateTime: number;
	EndTime: number;
	City: string;
	SerialNumber: string;
	AssociatedCcnId: string;
	State: string;
	AclIds: string;
	InstanceId: string;
	SecurityLockThreshold: number;
	UserCount: number;
	Status: string;
	CidrBlock: string;
	AssociatedCcnName: string;
	Description: string;
	SmartAGId: string;
	DataPlan: number;
	SnatEntries: SnatEntries;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.SmartAccessGatewaysInDescribeNetworkOptimizationSags
export interface SmartAccessGatewaysInDescribeNetworkOptimizationSags {
	SmartAccessGateway: SmartAccessGateway[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.DescribeNetworkOptimizationSagsResponse
export interface DescribeNetworkOptimizationSagsResponse {
	RequestId: string;
	TotalCount: number;
	PageNo: number;
	PageSize: number;
	SmartAccessGateways: SmartAccessGatewaysInDescribeNetworkOptimizationSags;
}

