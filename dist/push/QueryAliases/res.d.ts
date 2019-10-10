// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.AliasInfo
export interface AliasInfo {
	AliasName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.AliasInfos
export interface AliasInfos {
	AliasInfo: AliasInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/push.QueryAliasesResponse
export interface QueryAliasesResponse {
	RequestId: string;
	AliasInfos: AliasInfos;
}

