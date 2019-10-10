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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.ImagesInDescribeAvailableResource
export interface ImagesInDescribeAvailableResource {
	Image: Image[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.DataDiskSizes
export interface DataDiskSizes {
	DataDiskSize: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.SystemDiskSizes
export interface SystemDiskSizes {
	SystemDiskSize: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.SupportResource
export interface SupportResource {
	DataDiskSize: string;
	InstanceSpec: string;
	SystemDiskSize: string;
	EnsRegionId: string;
	SupportResourcesCount: string;
	DataDiskSizes: DataDiskSizes;
	SystemDiskSizes: SystemDiskSizes;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.SupportResourcesInDescribeAvailableResource
export interface SupportResourcesInDescribeAvailableResource {
	SupportResource: SupportResource[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.DescribeAvailableResourceResponse
export interface DescribeAvailableResourceResponse {
	RequestId: string;
	Code: number;
	Images: ImagesInDescribeAvailableResource;
	SupportResources: SupportResourcesInDescribeAvailableResource;
}

