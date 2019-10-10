// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.AccessPointType
export interface AccessPointType {
	AccessPointId: string;
	Status: string;
	Type: string;
	AttachedRegionNo: string;
	Location: string;
	HostOperator: string;
	Name: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.AccessPointSet
export interface AccessPointSet {
	AccessPointType: AccessPointType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeAccessPointsResponse
export interface DescribeAccessPointsResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	AccessPointSet: AccessPointSet;
}

