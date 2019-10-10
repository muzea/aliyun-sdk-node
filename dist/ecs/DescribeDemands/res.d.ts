// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.SupplyInfo
export interface SupplyInfo {
	Amount: number;
	SupplyStatus: string;
	SupplyStartTime: string;
	SupplyEndTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.SupplyInfos
export interface SupplyInfos {
	SupplyInfo: SupplyInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Demand
export interface Demand {
	ZoneId: string;
	DemandTime: string;
	InstanceTypeFamily: string;
	InstanceType: string;
	InstanceChargeType: string;
	Period: number;
	PeriodUnit: string;
	StartTime: string;
	EndTime: string;
	DemandStatus: string;
	TotalAmount: number;
	AvailableAmount: number;
	UsedAmount: number;
	DeliveringAmount: number;
	SupplyInfos: SupplyInfos;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Demands
export interface Demands {
	Demand: Demand[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeDemandsResponse
export interface DescribeDemandsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	RegionId: string;
	Demands: Demands;
}

