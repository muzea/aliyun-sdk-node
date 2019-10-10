// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.ProductItem
export interface ProductItem {
	Code: string;
	Name: string;
	CategoryId: number;
	SupplierId: number;
	SupplierName: string;
	ShortDescription: string;
	Tags: string;
	SuggestedPrice: string;
	TargetUrl: string;
	ImageUrl: string;
	Score: string;
	OperationSystem: string;
	WarrantyDate: string;
	DeliveryDate: string;
	DeliveryWay: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.ProductItems
export interface ProductItems {
	ProductItem: ProductItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/market.DescribeProductsResponse
export interface DescribeProductsResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	ProductItems: ProductItems;
}

