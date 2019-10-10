// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.LockReason
export interface LockReason {
	LockReason: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.OperationLocksInDescribeGlobalAccelerationInstances
export interface OperationLocksInDescribeGlobalAccelerationInstances {
	LockReason: LockReason[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.PublicIpAddress
export interface PublicIpAddress {
	AllocationId: string;
	IpAddress: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.PublicIpAddressesInDescribeGlobalAccelerationInstances
export interface PublicIpAddressesInDescribeGlobalAccelerationInstances {
	PublicIpAddress: PublicIpAddress[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.BackendServer
export interface BackendServer {
	RegionId: string;
	ServerId: string;
	ServerIpAddress: string;
	ServerType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.BackendServers
export interface BackendServers {
	BackendServer: BackendServer[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.GlobalAccelerationInstance
export interface GlobalAccelerationInstance {
	Name: string;
	ExpiredTime: string;
	IpAddress: string;
	HasReservationData: string;
	ChargeType: string;
	ServiceLocation: string;
	CreationTime: string;
	ServerIpAddress: string;
	ReservationBandwidth: string;
	ReservationActiveTime: string;
	RegionId: string;
	AccelerationLocation: string;
	ReservationInternetChargeType: string;
	BandwidthType: string;
	ReservationOrderType: string;
	Bandwidth: string;
	InternetChargeType: string;
	GlobalAccelerationInstanceId: string;
	Status: string;
	Description: string;
	OperationLocks: OperationLocksInDescribeGlobalAccelerationInstances;
	PublicIpAddresses: PublicIpAddressesInDescribeGlobalAccelerationInstances;
	BackendServers: BackendServers;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.GlobalAccelerationInstancesInDescribeServerRelatedGlobalAccelerationInstances
export interface GlobalAccelerationInstancesInDescribeServerRelatedGlobalAccelerationInstances {
	GlobalAccelerationInstance: GlobalAccelerationInstance[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeServerRelatedGlobalAccelerationInstancesResponse
export interface DescribeServerRelatedGlobalAccelerationInstancesResponse {
	RequestId: string;
	GlobalAccelerationInstances: GlobalAccelerationInstancesInDescribeServerRelatedGlobalAccelerationInstances;
}

