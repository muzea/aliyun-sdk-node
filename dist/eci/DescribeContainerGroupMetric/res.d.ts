// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupMetricCPU2
export interface DescribeContainerGroupMetricCPU2 {
	UsageNanoCores: number;
	UsageCoreNanoSeconds: number;
	Load: number;
	Limit: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupMetricMemory2
export interface DescribeContainerGroupMetricMemory2 {
	AvailableBytes: number;
	UsageBytes: number;
	Cache: number;
	WorkingSet: number;
	Rss: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupMetricContainer1
export interface DescribeContainerGroupMetricContainer1 {
	Name: string;
	CPU: DescribeContainerGroupMetricCPU2;
	Memory: DescribeContainerGroupMetricMemory2;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupMetricCPU1
export interface DescribeContainerGroupMetricCPU1 {
	UsageNanoCores: number;
	UsageCoreNanoSeconds: number;
	Load: number;
	Limit: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupMetricMemory1
export interface DescribeContainerGroupMetricMemory1 {
	AvailableBytes: number;
	UsageBytes: number;
	Cache: number;
	WorkingSet: number;
	Rss: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupMetricInterface2
export interface DescribeContainerGroupMetricInterface2 {
	TxBytes: number;
	RxBytes: number;
	TxErrors: number;
	RxErrors: number;
	Name: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupMetricNetwork1
export interface DescribeContainerGroupMetricNetwork1 {
	Interfaces: DescribeContainerGroupMetricInterface2[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupMetricRecord0
export interface DescribeContainerGroupMetricRecord0 {
	Timestamp: string;
	Containers: DescribeContainerGroupMetricContainer1[];
	CPU: DescribeContainerGroupMetricCPU1;
	Memory: DescribeContainerGroupMetricMemory1;
	Network: DescribeContainerGroupMetricNetwork1;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupMetricResponse
export interface DescribeContainerGroupMetricResponse {
	RequestId: string;
	ContainerGroupId: string;
	Records: DescribeContainerGroupMetricRecord0[];
}

