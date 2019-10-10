// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.CdnType
export interface CdnType {
	Type: string;
	Desc: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.CdnTypes
export interface CdnTypes {
	CdnType: CdnType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cdn.DescribeCdnTypesResponse
export interface DescribeCdnTypesResponse {
	RequestId: string;
	CdnTypes: CdnTypes;
}

