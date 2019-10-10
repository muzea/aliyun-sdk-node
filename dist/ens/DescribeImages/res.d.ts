// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.Image
export interface Image {
	Architecture: string;
	Platform: string;
	ImageVersion: string;
	OSType: string;
	ImageId: string;
	OSName: string;
	ImageOwnerAlias: string;
	CreationTime: string;
	ImageName: string;
	Description: string;
	ImageSize: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.ImagesInDescribeImages
export interface ImagesInDescribeImages {
	Image: Image[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.DescribeImagesResponse
export interface DescribeImagesResponse {
	RequestId: string;
	Code: number;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Images: ImagesInDescribeImages;
}

