// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.SubscribeInfoDo
export interface SubscribeInfoDo {
	Owner: string;
	GroupId: string;
	UpdateTime: number;
	Remark: string;
	InstanceId: string;
	IndependentNaming: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.DataInOnsGroupList
export interface DataInOnsGroupList {
	SubscribeInfoDo: SubscribeInfoDo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.OnsGroupListResponse
export interface OnsGroupListResponse {
	RequestId: string;
	HelpUrl: string;
	Data: DataInOnsGroupList;
}

