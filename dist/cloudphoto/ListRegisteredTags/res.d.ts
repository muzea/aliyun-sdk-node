// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.TagValue
export interface TagValue {
	Lang: string;
	Text: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.RegisteredTag
export interface RegisteredTag {
	TagKey: string;
	TagValues: TagValue[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.ListRegisteredTagsResponse
export interface ListRegisteredTagsResponse {
	Code: string;
	Message: string;
	RequestId: string;
	Action: string;
	RegisteredTags: RegisteredTag[];
}

