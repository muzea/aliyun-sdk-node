// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/kms.Tag
export interface Tag {
	KeyId: string;
	TagKey: string;
	TagValue: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/kms.Tags
export interface Tags {
	Tag: Tag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/kms.ListResourceTagsResponse
export interface ListResourceTagsResponse {
	RequestId: string;
	Tags: Tags;
}

