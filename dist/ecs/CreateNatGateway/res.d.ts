// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.ForwardTableIdsInCreateNatGateway
export interface ForwardTableIdsInCreateNatGateway {
	ForwardTableId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.BandwidthPackageIdsInCreateNatGateway
export interface BandwidthPackageIdsInCreateNatGateway {
	BandwidthPackageId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.CreateNatGatewayResponse
export interface CreateNatGatewayResponse {
	RequestId: string;
	NatGatewayId: string;
	ForwardTableIds: ForwardTableIdsInCreateNatGateway;
	BandwidthPackageIds: BandwidthPackageIdsInCreateNatGateway;
}

