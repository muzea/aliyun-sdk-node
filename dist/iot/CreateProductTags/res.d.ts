// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.ProductTag
export interface ProductTag {
	TagValue: string;
	TagKey: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.InvalidProductTagsInCreateProductTags
export interface InvalidProductTagsInCreateProductTags {
	ProductTag: ProductTag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.CreateProductTagsResponse
export interface CreateProductTagsResponse {
	RequestId: string;
	Success: boolean;
	ErrorMessage: string;
	Code: string;
	InvalidProductTags: InvalidProductTagsInCreateProductTags;
}

