// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.InstanceIdsInCreateOrder
export interface InstanceIdsInCreateOrder {
	InstanceId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.CreateOrderResponse
export interface CreateOrderResponse {
	RequestId: string;
	OrderId: string;
	InstanceIds: InstanceIdsInCreateOrder;
}

