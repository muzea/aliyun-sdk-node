// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/kms.Alias
export interface Alias {
	AliasArn: string;
	AliasName: string;
	KeyId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/kms.AliasesInListAliasesByKeyId
export interface AliasesInListAliasesByKeyId {
	Alias: Alias[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/kms.ListAliasesByKeyIdResponse
export interface ListAliasesByKeyIdResponse {
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	RequestId: string;
	Aliases: AliasesInListAliasesByKeyId;
}

