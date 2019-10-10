// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeFileSystemsMountTarget3
export interface DescribeFileSystemsMountTarget3 {
	MountTargetDomain: string;
	NetworkType: string;
	VpcId: string;
	VswId: string;
	AccessGroupName: string;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeFileSystemsMountTargets2
export interface DescribeFileSystemsMountTargets2 {
	MountTarget: DescribeFileSystemsMountTarget3[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeFileSystemsPackage3
export interface DescribeFileSystemsPackage3 {
	PackageId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeFileSystemsPackages2
export interface DescribeFileSystemsPackages2 {
	Package: DescribeFileSystemsPackage3[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeFileSystemsLdap2
export interface DescribeFileSystemsLdap2 {
	BindDN: string;
	URI: string;
	SearchBase: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeFileSystemsFileSystem1
export interface DescribeFileSystemsFileSystem1 {
	FileSystemId: string;
	Description: string;
	CreateTime: string;
	RegionId: string;
	ProtocolType: string;
	StorageType: string;
	MeteredSize: number;
	ZoneId: string;
	Bandwidth: number;
	Capacity: number;
	Status: string;
	MountTargets: DescribeFileSystemsMountTargets2;
	Packages: DescribeFileSystemsPackages2;
	Ldap: DescribeFileSystemsLdap2;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeFileSystemsFileSystems0
export interface DescribeFileSystemsFileSystems0 {
	FileSystem: DescribeFileSystemsFileSystem1[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeFileSystemsResponse
export interface DescribeFileSystemsResponse {
	RequestId: string;
	TotalCount: number;
	PageSize: number;
	PageNumber: number;
	FileSystems: DescribeFileSystemsFileSystems0;
}

