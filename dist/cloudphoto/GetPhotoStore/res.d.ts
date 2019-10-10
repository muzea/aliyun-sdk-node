// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.Bucket
export interface Bucket {
	Name: string;
	Region: string;
	State: string;
	Acl: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.PhotoStore
export interface PhotoStore {
	Name: string;
	IdStr: string;
	Ctime: number;
	AutoCleanEnabled: boolean;
	DefaultQuota: number;
	Remark: string;
	Mtime: number;
	DefaultTrashQuota: number;
	Id: number;
	AutoCleanDays: number;
	Buckets: Bucket[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.GetPhotoStoreResponse
export interface GetPhotoStoreResponse {
	Code: string;
	Message: string;
	RequestId: string;
	Action: string;
	PhotoStore: PhotoStore;
}

