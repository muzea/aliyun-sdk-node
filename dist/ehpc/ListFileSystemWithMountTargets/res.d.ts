// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.Packages
export interface Packages {
	PackageId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.PackageList
export interface PackageList {
	Packages: Packages[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.MountTargets
export interface MountTargets {
	VswId: string;
	MountTargetDomain: string;
	AccessGroup: string;
	Status: string;
	NetworkType: string;
	VpcId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.MountTargetListInListCpfsFileSystems
export interface MountTargetListInListCpfsFileSystems {
	MountTargets: MountTargets[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.FileSystems
export interface FileSystems {
	FileSystemId: string;
	RegionId: string;
	StorageType: string;
	ZoneId: string;
	CreateTime: string;
	ProtocolType: string;
	Capacity: string;
	MeteredSize: string;
	Destription: string;
	PackageList: PackageList;
	MountTargetList: MountTargetListInListCpfsFileSystems;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.FileSystemListInListFileSystemWithMountTargets
export interface FileSystemListInListFileSystemWithMountTargets {
	FileSystems: FileSystems[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ListFileSystemWithMountTargetsResponse
export interface ListFileSystemWithMountTargetsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	FileSystemList: FileSystemListInListFileSystemWithMountTargets;
}

