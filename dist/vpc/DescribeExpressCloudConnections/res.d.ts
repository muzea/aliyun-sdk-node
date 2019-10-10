// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.VirtualBorderRouterModel
export interface VirtualBorderRouterModel {
	InstanceId: string;
	AccessPointId: string;
	PhysicalConnectionId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.VirtualBorderRouterModels
export interface VirtualBorderRouterModels {
	VirtualBorderRouterModel: VirtualBorderRouterModel[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.ExpressCloudConnectionType
export interface ExpressCloudConnectionType {
	InstanceId: string;
	Status: string;
	Name: string;
	Description: string;
	GmtCreate: string;
	GmtModify: string;
	PeerCity: string;
	PeerLocation: string;
	PortType: string;
	Bandwidth: number;
	Distance: number;
	RedundantEccId: string;
	CircuitCode: string;
	Isp: string;
	Type: string;
	IdcSP: string;
	BusinessStatus: string;
	HasReservationData: string;
	ReservationBandwidth: string;
	ReservationInternetChargeType: string;
	ReservationActiveTime: string;
	ReservationOrderType: string;
	ApplicationType: string;
	ApplicationId: string;
	ApplicationStatus: string;
	ApplicationBandwidth: string;
	ContactTel: string;
	ContactMail: string;
	IDCardNo: string;
	EndTime: string;
	ChargeType: string;
	VirtualBorderRouterModels: VirtualBorderRouterModels;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.ExpressCloudConnectionSet
export interface ExpressCloudConnectionSet {
	ExpressCloudConnectionType: ExpressCloudConnectionType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeExpressCloudConnectionsResponse
export interface DescribeExpressCloudConnectionsResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	ExpressCloudConnectionSet: ExpressCloudConnectionSet;
}

