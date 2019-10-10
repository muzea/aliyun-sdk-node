// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.UrlUploadJobInfoDTO
export interface UrlUploadJobInfoDTO {
	JobId: string;
	UploadURL: string;
	MediaId: string;
	FileSize: string;
	Status: string;
	UserData: string;
	ErrorCode: string;
	ErrorMessage: string;
	CreationTime: string;
	CompleteTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.GetURLUploadInfosResponse
export interface GetURLUploadInfosResponse {
	RequestId: string;
	NonExists: string[];
	URLUploadInfoList: UrlUploadJobInfoDTO[];
}

