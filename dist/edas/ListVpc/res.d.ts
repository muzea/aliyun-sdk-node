// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.VpcEntity
export interface VpcEntity {
	Expired: boolean;
	RegionId: string;
	EcsNum: number;
	VpcName: string;
	UserId: string;
	VpcId: string;
	Status: string;
	Description: string;
	Cidrblock: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.VpcList
export interface VpcList {
	VpcEntity: VpcEntity[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ListVpcResponse
export interface ListVpcResponse {
	Code: number;
	Message: string;
	RequestId: string;
	VpcList: VpcList;
}

