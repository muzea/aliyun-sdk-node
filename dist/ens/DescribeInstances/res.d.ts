// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.InnerIpAddress
export interface InnerIpAddress {
	IpAddress: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.PublicIpAddressInDescribeInstances
export interface PublicIpAddressInDescribeInstances {
	IpAddress: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.SystemDisk
export interface SystemDisk {
	device_type: string;
	storage: number;
	uuid: string;
	disk_type: string;
	name: string;
	Category: string;
	Size: number;
	DiskId: string;
	DiskName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.DataDiskItem
export interface DataDiskItem {
	device_type: string;
	storage: number;
	uuid: string;
	disk_type: string;
	name: string;
	Category: string;
	Size: number;
	DiskId: string;
	DiskName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.DataDisk
export interface DataDisk {
	DataDiskItem: DataDiskItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.PublicIpAddress
export interface PublicIpAddress {
	Ip: string;
	Isp: string;
	GateWay: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.PublicIpAddresses
export interface PublicIpAddresses {
	PublicIpAddress: PublicIpAddress[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.PrivateIpAddress
export interface PrivateIpAddress {
	Ip: string;
	GateWay: string;
	Isp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.PrivateIpAddresses
export interface PrivateIpAddresses {
	PrivateIpAddress: PrivateIpAddress[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.Instance
export interface Instance {
	InstanceId: string;
	InstanceName: string;
	EnsRegionId: string;
	Cpu: string;
	Memory: number;
	Disk: number;
	InternetMaxBandwidthIn: number;
	InternetMaxBandwidthOut: number;
	CreationTime: string;
	Status: string;
	ImageId: string;
	ExpiredTime: string;
	InstanceResourceType: string;
	SpecName: string;
	OSName: string;
	InnerIpAddress: InnerIpAddress;
	PublicIpAddress: PublicIpAddressInDescribeInstances;
	SystemDisk: SystemDisk;
	DataDisk: DataDisk;
	PublicIpAddresses: PublicIpAddresses;
	PrivateIpAddresses: PrivateIpAddresses;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.Instances
export interface Instances {
	Instance: Instance[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.DescribeInstancesResponse
export interface DescribeInstancesResponse {
	RequestId: string;
	Code: number;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Instances: Instances;
}

