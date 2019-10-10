// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.ForwardTableIdsInCreateNatGateway
export interface ForwardTableIdsInCreateNatGateway {
	ForwardTableId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.SnatTableIdsInCreateNatGateway
export interface SnatTableIdsInCreateNatGateway {
	SnatTableId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.BandwidthPackageIdsInCreateNatGateway
export interface BandwidthPackageIdsInCreateNatGateway {
	BandwidthPackageId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.CreateNatGatewayResponse
export interface CreateNatGatewayResponse {
	RequestId: string;
	NatGatewayId: string;
	ForwardTableIds: ForwardTableIdsInCreateNatGateway;
	SnatTableIds: SnatTableIdsInCreateNatGateway;
	BandwidthPackageIds: BandwidthPackageIdsInCreateNatGateway;
}

