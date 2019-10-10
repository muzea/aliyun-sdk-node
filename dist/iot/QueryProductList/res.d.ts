// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.ProductInfo
export interface ProductInfo {
	ProductName: string;
	GmtCreate: number;
	DataFormat: number;
	ProductKey: string;
	DeviceCount: number;
	CreateTime: number;
	NodeType: number;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.ListInQueryProductList
export interface ListInQueryProductList {
	ProductInfo: ProductInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DataInQueryProductList
export interface DataInQueryProductList {
	CurrentPage: number;
	PageCount: number;
	PageSize: number;
	Total: number;
	List: ListInQueryProductList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.QueryProductListResponse
export interface QueryProductListResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	ErrorMessage: string;
	Data: DataInQueryProductList;
}

