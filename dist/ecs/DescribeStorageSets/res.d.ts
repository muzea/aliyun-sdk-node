// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.StorageSet
export interface StorageSet {
	StorageSetId: string;
	CreationTime: string;
	StorageSetName: string;
	Description: string;
	StorageSetPartitionNumber: number;
	RegionId: string;
	ZoneId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.StorageSets
export interface StorageSets {
	StorageSet: StorageSet[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeStorageSetsResponse
export interface DescribeStorageSetsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	StorageSets: StorageSets;
}

