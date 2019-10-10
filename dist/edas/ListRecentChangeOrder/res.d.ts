// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ChangeOrder
export interface ChangeOrder {
	ChangeOrderId: string;
	UserId: string;
	BatchType: string;
	BatchCount: number;
	AppId: string;
	GroupId: string;
	Status: number;
	CreateTime: string;
	FinishTime: string;
	CoType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ChangeOrderList
export interface ChangeOrderList {
	ChangeOrder: ChangeOrder[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ListRecentChangeOrderResponse
export interface ListRecentChangeOrderResponse {
	Code: number;
	Message: string;
	RequestId: string;
	ChangeOrderList: ChangeOrderList;
}

