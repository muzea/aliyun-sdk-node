// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.RegionDo
export interface RegionDo {
	Id: number;
	OnsRegionId: string;
	RegionName: string;
	ChannelId: number;
	ChannelName: string;
	CreateTime: number;
	UpdateTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.DataInOnsRegionList
export interface DataInOnsRegionList {
	RegionDo: RegionDo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ons.OnsRegionListResponse
export interface OnsRegionListResponse {
	RequestId: string;
	HelpUrl: string;
	Data: DataInOnsRegionList;
}

