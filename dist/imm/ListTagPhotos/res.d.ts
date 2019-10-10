// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.PhotosItem
export interface PhotosItem {
	SrcUri: string;
	TagScore: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.ListTagPhotosResponse
export interface ListTagPhotosResponse {
	RequestId: string;
	NextMarker: string;
	Photos: PhotosItem[];
}

