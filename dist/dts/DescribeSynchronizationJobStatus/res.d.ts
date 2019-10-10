// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobStatusTableInclude2
export interface DescribeSynchronizationJobStatusTableInclude2 {
	TableName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobStatusTableIncludes1
export interface DescribeSynchronizationJobStatusTableIncludes1 {
	TableInclude: DescribeSynchronizationJobStatusTableInclude2[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobStatusTableExclude2
export interface DescribeSynchronizationJobStatusTableExclude2 {
	TableName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobStatusTableExcludes1
export interface DescribeSynchronizationJobStatusTableExcludes1 {
	TableExclude: DescribeSynchronizationJobStatusTableExclude2[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobStatusSynchronizationObject1
export interface DescribeSynchronizationJobStatusSynchronizationObject1 {
	SchemaName: string;
	NewSchemaName: string;
	TableIncludes: DescribeSynchronizationJobStatusTableIncludes1[];
	TableExcludes: DescribeSynchronizationJobStatusTableExcludes1[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobStatusSynchronizationObjects0
export interface DescribeSynchronizationJobStatusSynchronizationObjects0 {
	SynchronizationObject: DescribeSynchronizationJobStatusSynchronizationObject1[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobStatusSourceEndpoint0
export interface DescribeSynchronizationJobStatusSourceEndpoint0 {
	InstanceType: string;
	InstanceId: string;
	EngineName: string;
	IP: string;
	Port: string;
	UserName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobStatusDestinationEndpoint0
export interface DescribeSynchronizationJobStatusDestinationEndpoint0 {
	InstanceType: string;
	InstanceId: string;
	EngineName: string;
	IP: string;
	Port: string;
	UserName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobStatusCheckItem2
export interface DescribeSynchronizationJobStatusCheckItem2 {
	ItemName: string;
	CheckStatus: string;
	ErrorMessage: string;
	RepairMethod: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobStatusDetail1
export interface DescribeSynchronizationJobStatusDetail1 {
	CheckItem: DescribeSynchronizationJobStatusCheckItem2[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobStatusPrecheckStatus0
export interface DescribeSynchronizationJobStatusPrecheckStatus0 {
	Status: string;
	Percent: string;
	Detail: DescribeSynchronizationJobStatusDetail1[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobStatusStructureInitializationStatus0
export interface DescribeSynchronizationJobStatusStructureInitializationStatus0 {
	Status: string;
	Percent: string;
	ErrorMessage: string;
	Progress: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobStatusDataInitializationStatus0
export interface DescribeSynchronizationJobStatusDataInitializationStatus0 {
	Status: string;
	Percent: string;
	ErrorMessage: string;
	Progress: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobStatusDataSynchronizationStatus0
export interface DescribeSynchronizationJobStatusDataSynchronizationStatus0 {
	Status: string;
	Percent: string;
	ErrorMessage: string;
	Delay: string;
	Checkpoint: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobStatusPerformance0
export interface DescribeSynchronizationJobStatusPerformance0 {
	RPS: string;
	FLOW: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationJobStatusResponse
export interface DescribeSynchronizationJobStatusResponse {
	RequestId: string;
	SynchronizationJobId: string;
	SynchronizationJobName: string;
	SynchronizationDirection: string;
	SynchronizationJobClass: string;
	PayType: string;
	ExpireTime: string;
	StructureInitialization: string;
	DataInitialization: string;
	Status: string;
	ErrorMessage: string;
	Delay: string;
	Checkpoint: string;
	SynchronizationObjects: DescribeSynchronizationJobStatusSynchronizationObjects0;
	SourceEndpoint: DescribeSynchronizationJobStatusSourceEndpoint0;
	DestinationEndpoint: DescribeSynchronizationJobStatusDestinationEndpoint0;
	PrecheckStatus: DescribeSynchronizationJobStatusPrecheckStatus0;
	StructureInitializationStatus: DescribeSynchronizationJobStatusStructureInitializationStatus0;
	DataInitializationStatus: DescribeSynchronizationJobStatusDataInitializationStatus0;
	DataSynchronizationStatus: DescribeSynchronizationJobStatusDataSynchronizationStatus0;
	Performance: DescribeSynchronizationJobStatusPerformance0;
}

