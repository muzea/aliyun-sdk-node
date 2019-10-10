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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.Tag
export interface Tag {
	Name: string;
	ParentTag: string;
	IdStr: string;
	Id: number;
	IsSubTag: boolean;
	Cover: Cover;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.ListPhotoTagsResponse
export interface ListPhotoTagsResponse {
	Code: string;
	Message: string;
	RequestId: string;
	Action: string;
	Tags: Tag[];
}

