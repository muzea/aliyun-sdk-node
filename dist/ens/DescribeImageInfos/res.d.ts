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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.ImagesInDescribeImageInfos
export interface ImagesInDescribeImageInfos {
	Image: Image[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.DescribeImageInfosResponse
export interface DescribeImageInfosResponse {
	RequestId: string;
	Code: number;
	Images: ImagesInDescribeImageInfos;
}

