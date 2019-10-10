// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.SetsItem
export interface SetsItem {
	Photos: number;
	SetId: string;
	ModifyTime: string;
	CreateTime: string;
	SetName: string;
	VideoLength: number;
	Status: string;
	FaceCount: number;
	VideoCount: number;
	ImageCount: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.ListSetsResponse
export interface ListSetsResponse {
	RequestId: string;
	NextMarker: string;
	Sets: SetsItem[];
}

