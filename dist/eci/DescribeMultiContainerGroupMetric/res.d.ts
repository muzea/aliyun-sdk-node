// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeMultiContainerGroupMetricCPU3
export interface DescribeMultiContainerGroupMetricCPU3 {
	UsageNanoCores: number;
	UsageCoreNanoSeconds: number;
	Load: number;
	Limit: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeMultiContainerGroupMetricMemory3
export interface DescribeMultiContainerGroupMetricMemory3 {
	AvailableBytes: number;
	UsageBytes: number;
	Cache: number;
	WorkingSet: number;
	Rss: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeMultiContainerGroupMetricContainer2
export interface DescribeMultiContainerGroupMetricContainer2 {
	Name: string;
	CPU: DescribeMultiContainerGroupMetricCPU3;
	Memory: DescribeMultiContainerGroupMetricMemory3;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeMultiContainerGroupMetricCPU2
export interface DescribeMultiContainerGroupMetricCPU2 {
	UsageNanoCores: number;
	UsageCoreNanoSeconds: number;
	Load: number;
	Limit: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeMultiContainerGroupMetricMemory2
export interface DescribeMultiContainerGroupMetricMemory2 {
	AvailableBytes: number;
	UsageBytes: number;
	Cache: number;
	WorkingSet: number;
	Rss: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeMultiContainerGroupMetricInterface3
export interface DescribeMultiContainerGroupMetricInterface3 {
	TxBytes: number;
	RxBytes: number;
	TxErrors: number;
	RxErrors: number;
	Name: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeMultiContainerGroupMetricNetwork2
export interface DescribeMultiContainerGroupMetricNetwork2 {
	Interfaces: DescribeMultiContainerGroupMetricInterface3[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeMultiContainerGroupMetricPodStat1
export interface DescribeMultiContainerGroupMetricPodStat1 {
	Timestamp: string;
	Containers: DescribeMultiContainerGroupMetricContainer2[];
	CPU: DescribeMultiContainerGroupMetricCPU2;
	Memory: DescribeMultiContainerGroupMetricMemory2;
	Network: DescribeMultiContainerGroupMetricNetwork2;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeMultiContainerGroupMetricRecord0
export interface DescribeMultiContainerGroupMetricRecord0 {
	ContainerGroupId: string;
	Records: DescribeMultiContainerGroupMetricPodStat1[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeMultiContainerGroupMetricResponse
export interface DescribeMultiContainerGroupMetricResponse {
	RequestId: string;
	MonitorDatas: DescribeMultiContainerGroupMetricRecord0[];
}

