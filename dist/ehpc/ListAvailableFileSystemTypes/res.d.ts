// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.StorageTypes
export interface StorageTypes {
	StorageType: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.FileSystemTypes
export interface FileSystemTypes {
	FileSystemType: string;
	Available: boolean;
	ProtocolType: string;
	StorageTypes: StorageTypes;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.FileSystemTypeList
export interface FileSystemTypeList {
	FileSystemTypes: FileSystemTypes[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ListAvailableFileSystemTypesResponse
export interface ListAvailableFileSystemTypesResponse {
	RequestId: string;
	FileSystemTypeList: FileSystemTypeList;
}

