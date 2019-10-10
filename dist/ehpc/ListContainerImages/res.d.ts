// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ImagesItem
export interface ImagesItem {
	System: string;
	Type: string;
	Status: string;
	ImageId: string;
	UpdateDateTime: string;
	Repository: string;
	Tag: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ImagesInListContainerImages
export interface ImagesInListContainerImages {
	ImagesItem: ImagesItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ListContainerImagesResponse
export interface ListContainerImagesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	DBInfo: string;
	Images: ImagesInListContainerImages;
}

