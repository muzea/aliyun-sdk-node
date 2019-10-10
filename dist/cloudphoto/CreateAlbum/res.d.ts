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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.Album
export interface Album {
	Name: string;
	IdStr: string;
	Ctime: number;
	State: string;
	PhotosCount: number;
	Mtime: number;
	Remark: string;
	Id: number;
	Cover: Cover;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.CreateAlbumResponse
export interface CreateAlbumResponse {
	Code: string;
	Message: string;
	RequestId: string;
	Action: string;
	Album: Album;
}

