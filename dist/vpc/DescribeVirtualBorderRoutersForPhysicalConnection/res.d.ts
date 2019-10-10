// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.VirtualBorderRouterForPhysicalConnectionType
export interface VirtualBorderRouterForPhysicalConnectionType {
	VbrId: string;
	VbrOwnerUid: number;
	EccId: string;
	Type: string;
	CreationTime: string;
	ActivationTime: string;
	TerminationTime: string;
	RecoveryTime: string;
	VlanId: number;
	Status: string;
	CircuitCode: string;
	LocalGatewayIp: string;
	PeerGatewayIp: string;
	PeeringSubnetMask: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.VirtualBorderRouterForPhysicalConnectionSet
export interface VirtualBorderRouterForPhysicalConnectionSet {
	VirtualBorderRouterForPhysicalConnectionType: VirtualBorderRouterForPhysicalConnectionType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeVirtualBorderRoutersForPhysicalConnectionResponse
export interface DescribeVirtualBorderRoutersForPhysicalConnectionResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	VirtualBorderRouterForPhysicalConnectionSet: VirtualBorderRouterForPhysicalConnectionSet;
}

