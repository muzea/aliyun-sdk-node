// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.SignatureInfo
export interface SignatureInfo {
	RegionId: string;
	SignatureId: string;
	SignatureName: string;
	SignatureKey: string;
	SignatureSecret: string;
	CreatedTime: string;
	ModifiedTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.SignatureInfos
export interface SignatureInfos {
	SignatureInfo: SignatureInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudapi.DescribeSignaturesResponse
export interface DescribeSignaturesResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	SignatureInfos: SignatureInfos;
}

