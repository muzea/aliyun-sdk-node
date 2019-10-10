// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.ProductTag
export interface ProductTag {
	TagValue: string;
	TagKey: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.InvalidProductTagsInUpdateProductTags
export interface InvalidProductTagsInUpdateProductTags {
	ProductTag: ProductTag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/iot.UpdateProductTagsResponse
export interface UpdateProductTagsResponse {
	RequestId: string;
	Success: boolean;
	ErrorMessage: string;
	Code: string;
	InvalidProductTags: InvalidProductTagsInUpdateProductTags;
}

