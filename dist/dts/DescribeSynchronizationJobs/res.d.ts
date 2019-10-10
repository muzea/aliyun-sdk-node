// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobsTableInclude3
export interface DescribeSynchronizationJobsTableInclude3 {
	TableName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobsTableIncludes2
export interface DescribeSynchronizationJobsTableIncludes2 {
	TableInclude: DescribeSynchronizationJobsTableInclude3[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobsTableExclude3
export interface DescribeSynchronizationJobsTableExclude3 {
	TableName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobsTableExcludes2
export interface DescribeSynchronizationJobsTableExcludes2 {
	TableExclude: DescribeSynchronizationJobsTableExclude3[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobsSynchronizationObject2
export interface DescribeSynchronizationJobsSynchronizationObject2 {
	SchemaName: string;
	NewSchemaName: string;
	TableIncludes: DescribeSynchronizationJobsTableIncludes2[];
	TableExcludes: DescribeSynchronizationJobsTableExcludes2[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobsSynchronizationObjects1
export interface DescribeSynchronizationJobsSynchronizationObjects1 {
	SynchronizationObject: DescribeSynchronizationJobsSynchronizationObject2[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobsSourceEndpoint1
export interface DescribeSynchronizationJobsSourceEndpoint1 {
	InstanceType: string;
	InstanceId: string;
	EngineName: string;
	IP: string;
	Port: string;
	UserName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobsDestinationEndpoint1
export interface DescribeSynchronizationJobsDestinationEndpoint1 {
	InstanceType: string;
	InstanceId: string;
	EngineName: string;
	IP: string;
	Port: string;
	UserName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobsCheckItem3
export interface DescribeSynchronizationJobsCheckItem3 {
	ItemName: string;
	CheckStatus: string;
	ErrorMessage: string;
	RepairMethod: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobsDetail2
export interface DescribeSynchronizationJobsDetail2 {
	CheckItem: DescribeSynchronizationJobsCheckItem3[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobsPrecheckStatus1
export interface DescribeSynchronizationJobsPrecheckStatus1 {
	Status: string;
	Percent: string;
	Detail: DescribeSynchronizationJobsDetail2[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobsStructureInitializationStatus1
export interface DescribeSynchronizationJobsStructureInitializationStatus1 {
	Status: string;
	Percent: string;
	ErrorMessage: string;
	Progress: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobsDataInitializationStatus1
export interface DescribeSynchronizationJobsDataInitializationStatus1 {
	Status: string;
	Percent: string;
	ErrorMessage: string;
	Progress: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobsDataSynchronizationStatus1
export interface DescribeSynchronizationJobsDataSynchronizationStatus1 {
	Status: string;
	Percent: string;
	ErrorMessage: string;
	Delay: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobsPerformance1
export interface DescribeSynchronizationJobsPerformance1 {
	RPS: string;
	FLOW: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobsSynchronizationInstance1
export interface DescribeSynchronizationJobsSynchronizationInstance1 {
	SynchronizationJobId: string;
	SynchronizationDirection: string;
	SynchronizationJobName: string;
	SynchronizationJobClass: string;
	PayType: string;
	ExpireTime: string;
	StructureInitialization: string;
	DataInitialization: string;
	Status: string;
	ErrorMessage: string;
	Delay: string;
	SynchronizationObjects: DescribeSynchronizationJobsSynchronizationObjects1[];
	SourceEndpoint: DescribeSynchronizationJobsSourceEndpoint1;
	DestinationEndpoint: DescribeSynchronizationJobsDestinationEndpoint1;
	PrecheckStatus: DescribeSynchronizationJobsPrecheckStatus1;
	StructureInitializationStatus: DescribeSynchronizationJobsStructureInitializationStatus1;
	DataInitializationStatus: DescribeSynchronizationJobsDataInitializationStatus1;
	DataSynchronizationStatus: DescribeSynchronizationJobsDataSynchronizationStatus1;
	Performance: DescribeSynchronizationJobsPerformance1;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobsSynchronizationInstances0
export interface DescribeSynchronizationJobsSynchronizationInstances0 {
	SynchronizationInstance: DescribeSynchronizationJobsSynchronizationInstance1[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobsResponse
export interface DescribeSynchronizationJobsResponse {
	RequestId: string;
	PageNumber: number;
	TotalRecordCount: number;
	PageRecordCount: number;
	SynchronizationInstances: DescribeSynchronizationJobsSynchronizationInstances0;
}

