// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.InstanceVO
export interface InstanceVO {
	InstanceId: string;
	InstanceStatus: number;
	ReleaseTime: number;
	InstanceType: number;
	InstanceName: string;
	IndependentNaming: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.DataInOnsInstanceInServiceList
export interface DataInOnsInstanceInServiceList {
	InstanceVO: InstanceVO[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.OnsInstanceInServiceListResponse
export interface OnsInstanceInServiceListResponse {
	RequestId: string;
	HelpUrl: string;
	Data: DataInOnsInstanceInServiceList;
}

