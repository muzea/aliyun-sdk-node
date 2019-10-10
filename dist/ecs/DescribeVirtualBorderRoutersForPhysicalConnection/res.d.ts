// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.VirtualBorderRouterForPhysicalConnectionType
export interface VirtualBorderRouterForPhysicalConnectionType {
	VbrId: string;
	VbrOwnerUid: number;
	CreationTime: string;
	ActivationTime: string;
	TerminationTime: string;
	RecoveryTime: string;
	VlanId: number;
	CircuitCode: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.VirtualBorderRouterForPhysicalConnectionSet
export interface VirtualBorderRouterForPhysicalConnectionSet {
	VirtualBorderRouterForPhysicalConnectionType: VirtualBorderRouterForPhysicalConnectionType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeVirtualBorderRoutersForPhysicalConnectionResponse
export interface DescribeVirtualBorderRoutersForPhysicalConnectionResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	VirtualBorderRouterForPhysicalConnectionSet: VirtualBorderRouterForPhysicalConnectionSet;
}

