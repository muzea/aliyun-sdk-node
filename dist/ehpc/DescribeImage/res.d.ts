// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.BaseOsTag
export interface BaseOsTag {
	OsTag: string;
	Platform: string;
	Version: string;
	Architecture: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ImageInfo
export interface ImageInfo {
	Uid: string;
	Repository: string;
	SkuCode: string;
	ImageId: string;
	ImageOwnerAlias: string;
	System: string;
	PostInstallScript: string;
	ProductCode: string;
	Size: number;
	Tag: string;
	PricingCycle: string;
	ImageName: string;
	Status: string;
	Description: string;
	Type: string;
	UpdateDateTime: string;
	BaseOsTag: BaseOsTag;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.DescribeImageResponse
export interface DescribeImageResponse {
	RequestId: string;
	ImageInfo: ImageInfo;
}

