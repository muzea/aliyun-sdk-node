// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/kms.Alias
export interface Alias {
	AliasArn: string;
	AliasName: string;
	KeyId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/kms.AliasesInListAliases
export interface AliasesInListAliases {
	Alias: Alias[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/kms.ListAliasesResponse
export interface ListAliasesResponse {
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	RequestId: string;
	Aliases: AliasesInListAliases;
}

