// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.Media
export interface Media {
	Instance: string;
	Name: string;
	Description: string;
	Type: string;
	Content: string;
	FilePath: string;
	FileName: string;
	OssFileName: string;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ListInListMedias
export interface ListInListMedias {
	Media: Media[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.Medias
export interface Medias {
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	List: ListInListMedias;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ListMediasResponse
export interface ListMediasResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	Medias: Medias;
}

