// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.RouterInterfaceType
export interface RouterInterfaceType {
	RouterInterfaceId: string;
	OppositeRegionId: string;
	Role: string;
	Spec: string;
	Name: string;
	Description: string;
	RouterId: string;
	RouterType: string;
	CreationTime: string;
	EndTime: string;
	ChargeType: string;
	Status: string;
	BusinessStatus: string;
	ConnectedTime: string;
	OppositeInterfaceId: string;
	OppositeInterfaceSpec: string;
	OppositeInterfaceStatus: string;
	OppositeInterfaceBusinessStatus: string;
	OppositeRouterId: string;
	OppositeRouterType: string;
	OppositeInterfaceOwnerId: string;
	AccessPointId: string;
	OppositeAccessPointId: string;
	HealthCheckSourceIp: string;
	HealthCheckTargetIp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.RouterInterfaceSet
export interface RouterInterfaceSet {
	RouterInterfaceType: RouterInterfaceType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeRouterInterfacesResponse
export interface DescribeRouterInterfacesResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	RouterInterfaceSet: RouterInterfaceSet;
}

