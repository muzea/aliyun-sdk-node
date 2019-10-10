// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ApiSignatureItem
export interface ApiSignatureItem {
	ApiId: string;
	ApiName: string;
	SignatureId: string;
	SignatureName: string;
	BoundTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.ApiSignatures
export interface ApiSignatures {
	ApiSignatureItem: ApiSignatureItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeApiSignaturesResponse
export interface DescribeApiSignaturesResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	ApiSignatures: ApiSignatures;
}

