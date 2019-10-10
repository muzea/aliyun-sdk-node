// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.Caster
export interface Caster {
	Status: number;
	NormType: number;
	CasterId: string;
	CasterName: string;
	CreateTime: string;
	StartTime: string;
	PurchaseTime: string;
	ExpireTime: string;
	ChargeType: string;
	CasterTemplate: string;
	ChannelEnable: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.CasterList
export interface CasterList {
	Caster: Caster[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeCastersResponse
export interface DescribeCastersResponse {
	RequestId: string;
	Total: number;
	CasterList: CasterList;
}

