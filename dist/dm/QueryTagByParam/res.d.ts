// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.Tag
export interface Tag {
	TagId: string;
	TagName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.DataInQueryTagByParam
export interface DataInQueryTagByParam {
	tag: Tag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dm.QueryTagByParamResponse
export interface QueryTagByParamResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	data: DataInQueryTagByParam;
}

