// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobsSynchronousObject2
export interface DescribeMigrationJobsSynchronousObject2 {
	DatabaseName: string;
	WholeDatabase: string;
	TableList: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobsMigrationObject1
export interface DescribeMigrationJobsMigrationObject1 {
	SynchronousObject: DescribeMigrationJobsSynchronousObject2[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobsSourceEndpoint1
export interface DescribeMigrationJobsSourceEndpoint1 {
	InstanceID: string;
	InstanceType: string;
	EngineName: string;
	IP: string;
	Port: string;
	DatabaseName: string;
	OracleSID: string;
	UserName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobsDestinationEndpoint1
export interface DescribeMigrationJobsDestinationEndpoint1 {
	InstanceID: string;
	InstanceType: string;
	EngineName: string;
	IP: string;
	Port: string;
	DatabaseName: string;
	OracleSID: string;
	UserName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobsMigrationMode1
export interface DescribeMigrationJobsMigrationMode1 {
	StructureInitialization: boolean;
	DataInitialization: boolean;
	DataSynchronization: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobsPrecheck1
export interface DescribeMigrationJobsPrecheck1 {
	Status: string;
	Percent: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobsStructureInitialization1
export interface DescribeMigrationJobsStructureInitialization1 {
	Status: string;
	Percent: string;
	ErrorMessage: string;
	Progress: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobsDataInitialization1
export interface DescribeMigrationJobsDataInitialization1 {
	Status: string;
	Percent: string;
	ErrorMessage: string;
	Progress: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobsDataSynchronization1
export interface DescribeMigrationJobsDataSynchronization1 {
	Status: string;
	Percent: string;
	ErrorMessage: string;
	Delay: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobsMigrationJob1
export interface DescribeMigrationJobsMigrationJob1 {
	MigrationJobID: string;
	MigrationJobName: string;
	PayType: string;
	MigrationJobClass: string;
	MigrationJobStatus: string;
	MigrationObject: DescribeMigrationJobsMigrationObject1[];
	SourceEndpoint: DescribeMigrationJobsSourceEndpoint1;
	DestinationEndpoint: DescribeMigrationJobsDestinationEndpoint1;
	MigrationMode: DescribeMigrationJobsMigrationMode1;
	Precheck: DescribeMigrationJobsPrecheck1;
	StructureInitialization: DescribeMigrationJobsStructureInitialization1;
	DataInitialization: DescribeMigrationJobsDataInitialization1;
	DataSynchronization: DescribeMigrationJobsDataSynchronization1;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobsMigrationJobs0
export interface DescribeMigrationJobsMigrationJobs0 {
	MigrationJob: DescribeMigrationJobsMigrationJob1[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobsResponse
export interface DescribeMigrationJobsResponse {
	PageNumber: number;
	TotalRecordCount: number;
	PageRecordCount: number;
	MigrationJobs: DescribeMigrationJobsMigrationJobs0;
}

