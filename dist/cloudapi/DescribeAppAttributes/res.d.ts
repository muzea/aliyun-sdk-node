// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.AppAttribute
export interface AppAttribute {
	AppId: number;
	AppName: string;
	Description: string;
	CreatedTime: string;
	ModifiedTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.AppsInDescribeAppAttributes
export interface AppsInDescribeAppAttributes {
	AppAttribute: AppAttribute[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeAppAttributesResponse
export interface DescribeAppAttributesResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	Apps: AppsInDescribeAppAttributes;
}

