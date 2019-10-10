// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.AssociatedPhysicalConnection
export interface AssociatedPhysicalConnection {
	CircuitCode: string;
	VlanInterfaceId: string;
	LocalGatewayIp: string;
	PeerGatewayIp: string;
	PeeringSubnetMask: string;
	PhysicalConnectionId: string;
	PhysicalConnectionStatus: string;
	PhysicalConnectionBusinessStatus: string;
	PhysicalConnectionOwnerUid: string;
	VlanId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.AssociatedPhysicalConnections
export interface AssociatedPhysicalConnections {
	AssociatedPhysicalConnection: AssociatedPhysicalConnection[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.AssociatedCen
export interface AssociatedCen {
	CenStatus: string;
	CenOwnerId: number;
	CenId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.AssociatedCensInDescribeVirtualBorderRouters
export interface AssociatedCensInDescribeVirtualBorderRouters {
	AssociatedCen: AssociatedCen[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.VirtualBorderRouterType
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
	EccId: string;
	Type: string;
	MinTxInterval: number;
	MinRxInterval: number;
	DetectMultiplier: number;
	AssociatedPhysicalConnections: AssociatedPhysicalConnections;
	AssociatedCens: AssociatedCensInDescribeVirtualBorderRouters;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.VirtualBorderRouterSet
export interface VirtualBorderRouterSet {
	VirtualBorderRouterType: VirtualBorderRouterType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeVirtualBorderRoutersResponse
export interface DescribeVirtualBorderRoutersResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	VirtualBorderRouterSet: VirtualBorderRouterSet;
}

