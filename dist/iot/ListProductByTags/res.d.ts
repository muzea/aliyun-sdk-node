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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.ProductInfos
export interface ProductInfos {
	ProductInfo: ProductInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.ListProductByTagsResponse
export interface ListProductByTagsResponse {
	RequestId: string;
	Success: boolean;
	ErrorMessage: string;
	Code: string;
	ProductInfos: ProductInfos;
}

