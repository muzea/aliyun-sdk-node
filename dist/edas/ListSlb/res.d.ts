// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.SlbEntity
export interface SlbEntity {
	Expired: boolean;
	RegionId: string;
	GroupId: number;
	UserId: string;
	VswitchId: string;
	SlbStatus: string;
	SlbId: string;
	AddressType: string;
	VpcId: string;
	NetworkType: string;
	Address: string;
	SlbName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.SlbListInListSlb
export interface SlbListInListSlb {
	SlbEntity: SlbEntity[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ListSlbResponse
export interface ListSlbResponse {
	Code: number;
	Message: string;
	RequestId: string;
	SlbList: SlbListInListSlb;
}

