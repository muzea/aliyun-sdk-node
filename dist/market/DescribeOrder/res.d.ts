// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.SupplierTelephones
export interface SupplierTelephones {
	Telephone: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.InstanceIdsInDescribeOrder
export interface InstanceIdsInDescribeOrder {
	InstanceId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.DescribeOrderResponse
export interface DescribeOrderResponse {
	OrderId: number;
	AliUid: number;
	SupplierCompanyName: string;
	ProductCode: string;
	ProductSkuCode: string;
	ProductName: string;
	PeriodType: string;
	Quantity: number;
	AccountQuantity: number;
	OrderType: string;
	OrderStatus: string;
	PayStatus: string;
	PaidOn: number;
	CreatedOn: number;
	OriginalPrice: number;
	TotalPrice: number;
	PaymentPrice: number;
	CouponPrice: number;
	SupplierTelephones: SupplierTelephones;
	InstanceIds: InstanceIdsInDescribeOrder;
}

