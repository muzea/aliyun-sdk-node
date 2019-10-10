// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeMountTargetsMountTarget1
export interface DescribeMountTargetsMountTarget1 {
	MountTargetDomain: string;
	NetworkType: string;
	VpcId: string;
	VswId: string;
	AccessGroup: string;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeMountTargetsMountTargets0
export interface DescribeMountTargetsMountTargets0 {
	MountTarget: DescribeMountTargetsMountTarget1[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeMountTargetsResponse
export interface DescribeMountTargetsResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	MountTargets: DescribeMountTargetsMountTargets0;
}

