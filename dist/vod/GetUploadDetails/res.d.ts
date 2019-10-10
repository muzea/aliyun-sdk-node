// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.UploadDetail
export interface UploadDetail {
	MediaId: string;
	Title: string;
	FileSize: number;
	Status: string;
	UploadStatus: string;
	CreationTime: string;
	ModificationTime: string;
	CompletionTime: string;
	UploadSize: number;
	UploadRatio: number;
	UploadIP: string;
	UploadSource: string;
	DeviceModel: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.GetUploadDetailsResponse
export interface GetUploadDetailsResponse {
	RequestId: string;
	NonExistMediaIds: string[];
	ForbiddenMediaIds: string[];
	UploadDetails: UploadDetail[];
}

