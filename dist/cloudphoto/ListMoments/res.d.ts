// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.Moment
export interface Moment {
	Id: number;
	IdStr: string;
	LocationName: string;
	PhotosCount: number;
	State: string;
	TakenAt: number;
	Ctime: number;
	Mtime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cloudphoto.ListMomentsResponse
export interface ListMomentsResponse {
	Code: string;
	Message: string;
	NextCursor: string;
	TotalCount: number;
	RequestId: string;
	Action: string;
	Moments: Moment[];
}

