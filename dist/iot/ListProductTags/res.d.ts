// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.ProductTag
export interface ProductTag {
	TagValue: string;
	TagKey: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.DataInListProductTags
export interface DataInListProductTags {
	ProductTag: ProductTag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.ListProductTagsResponse
export interface ListProductTagsResponse {
	RequestId: string;
	Success: boolean;
	ErrorMessage: string;
	Code: string;
	Data: DataInListProductTags;
}

