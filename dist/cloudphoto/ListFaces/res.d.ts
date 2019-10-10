// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.Cover
export interface Cover {
	FileId: string;
	IsVideo: boolean;
	IdStr: string;
	Ctime: number;
	State: string;
	Title: string;
	Remark: string;
	Mtime: number;
	Md5: string;
	Width: number;
	Id: number;
	Height: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.Face
export interface Face {
	Name: string;
	FaceIdStr: string;
	IdStr: string;
	Ctime: number;
	IsMe: boolean;
	FaceId: number;
	Id: number;
	FaceName: string;
	State: string;
	PhotosCount: number;
	Mtime: number;
	Axis: string[];
	Cover: Cover;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.ListFacesResponse
export interface ListFacesResponse {
	Code: string;
	Message: string;
	NextCursor: string;
	TotalCount: number;
	RequestId: string;
	Action: string;
	Faces: Face[];
}

