// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.TagsItem
export interface TagsItem {
	TagEnName: string;
	TagName: string;
	TagCount: number;
	TagConfidence: number;
	ParentTagEnName: string;
	TagLevel: number;
	ParentTagName: string;
	Num: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.ListSetTagsResponse
export interface ListSetTagsResponse {
	RequestId: string;
	SetId: string;
	Tags: TagsItem[];
}

