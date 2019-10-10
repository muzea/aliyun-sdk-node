// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.DocInfosItem
export interface DocInfosItem {
	UniqueId: string;
	SrcUri: string;
	Name: string;
	ContentType: string;
	LastModified: string;
	Size: number;
	PageNum: number;
	CustomKey1: string;
	CustomKey2: string;
	CustomKey3: string;
	CustomKey4: string;
	CustomKey5: string;
	CustomKey6: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.SearchDocIndexResponse
export interface SearchDocIndexResponse {
	RequestId: string;
	DocInfos: DocInfosItem[];
}

