// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.VirtualBorderRouterType
export interface VirtualBorderRouterType {
	VbrId: string;
	CreationTime: string;
	ActivationTime: string;
	TerminationTime: string;
	RecoveryTime: string;
	Status: string;
	VlanId: number;
	CircuitCode: string;
	RouteTableId: string;
	VlanInterfaceId: string;
	LocalGatewayIp: string;
	PeerGatewayIp: string;
	PeeringSubnetMask: string;
	PhysicalConnectionId: string;
	PhysicalConnectionStatus: string;
	PhysicalConnectionBusinessStatus: string;
	PhysicalConnectionOwnerUid: string;
	AccessPointId: string;
	Name: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.VirtualBorderRouterSet
export interface VirtualBorderRouterSet {
	VirtualBorderRouterType: VirtualBorderRouterType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeVirtualBorderRoutersResponse
export interface DescribeVirtualBorderRoutersResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	VirtualBorderRouterSet: VirtualBorderRouterSet;
}

