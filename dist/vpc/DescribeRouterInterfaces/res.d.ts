// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.RouterInterfaceType
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
	OppositeVpcInstanceId: string;
	Bandwidth: number;
	VpcInstanceId: string;
	OppositeBandwidth: number;
	HasReservationData: string;
	ReservationBandwidth: string;
	ReservationInternetChargeType: string;
	ReservationActiveTime: string;
	ReservationOrderType: string;
	CrossBorder: boolean;
	HcThreshold: number;
	HcRate: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.RouterInterfaceSet
export interface RouterInterfaceSet {
	RouterInterfaceType: RouterInterfaceType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeRouterInterfacesResponse
export interface DescribeRouterInterfacesResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	RouterInterfaceSet: RouterInterfaceSet;
}

