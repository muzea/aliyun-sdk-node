// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.Folder
export interface Folder {
	Path: string;
	FolderId: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.Folders
export interface Folders {
	Folder: Folder[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.ListChildFolderResponse
export interface ListChildFolderResponse {
	RequestId: string;
	Folders: Folders;
}

