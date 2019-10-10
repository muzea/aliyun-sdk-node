// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ContainerAppInfo
export interface ContainerAppInfo {
	Id: string;
	Name: string;
	Description: string;
	Repository: string;
	ImageTag: string;
	CreateTime: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.DescribeContainerAppResponse
export interface DescribeContainerAppResponse {
	RequestId: string;
	ContainerAppInfo: ContainerAppInfo;
}

