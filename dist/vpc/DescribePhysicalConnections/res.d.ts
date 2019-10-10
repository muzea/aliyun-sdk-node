// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.PhysicalConnectionType
export interface PhysicalConnectionType {
	PhysicalConnectionId: string;
	AccessPointId: string;
	Type: string;
	Status: string;
	BusinessStatus: string;
	CreationTime: string;
	EnabledTime: string;
	LineOperator: string;
	Spec: string;
	PeerLocation: string;
	PortType: string;
	RedundantPhysicalConnectionId: string;
	Name: string;
	Description: string;
	AdLocation: string;
	PortNumber: string;
	CircuitCode: string;
	Bandwidth: number;
	LoaStatus: string;
	HasReservationData: string;
	ReservationInternetChargeType: string;
	ReservationActiveTime: string;
	ReservationOrderType: string;
	EndTime: string;
	ChargeType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.PhysicalConnectionSet
export interface PhysicalConnectionSet {
	PhysicalConnectionType: PhysicalConnectionType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribePhysicalConnectionsResponse
export interface DescribePhysicalConnectionsResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	PhysicalConnectionSet: PhysicalConnectionSet;
}

