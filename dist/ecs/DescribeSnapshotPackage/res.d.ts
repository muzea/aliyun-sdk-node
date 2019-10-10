// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.SnapshotPackage
export interface SnapshotPackage {
	StartTime: string;
	EndTime: string;
	InitCapacity: number;
	DisplayName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.SnapshotPackages
export interface SnapshotPackages {
	SnapshotPackage: SnapshotPackage[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeSnapshotPackageResponse
export interface DescribeSnapshotPackageResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	SnapshotPackages: SnapshotPackages;
}

