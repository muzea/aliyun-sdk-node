// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.RegisteredMedia
export interface RegisteredMedia {
	MediaId: string;
	FileURL: string;
	NewRegister: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.RegisterMediaResponse
export interface RegisterMediaResponse {
	RequestId: string;
	FailedFileURLs: string[];
	RegisteredMediaList: RegisteredMedia[];
}

