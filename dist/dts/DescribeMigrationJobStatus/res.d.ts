// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobStatusSourceEndpoint0
export interface DescribeMigrationJobStatusSourceEndpoint0 {
	InstanceType: string;
	InstanceId: string;
	EngineName: string;
	IP: string;
	Port: string;
	DatabaseName: string;
	OracleSID: string;
	UserName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobStatusDestinationEndpoint0
export interface DescribeMigrationJobStatusDestinationEndpoint0 {
	InstanceType: string;
	InstanceId: string;
	EngineName: string;
	IP: string;
	Port: string;
	DatabaseName: string;
	OracleSID: string;
	UserName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobStatusMigrationMode0
export interface DescribeMigrationJobStatusMigrationMode0 {
	StructureInitialization: boolean;
	DataInitialization: boolean;
	DataSynchronization: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobStatusCheckItem2
export interface DescribeMigrationJobStatusCheckItem2 {
	ItemName: string;
	CheckStatus: string;
	ErrorMessage: string;
	RepairMethod: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobStatusDetail1
export interface DescribeMigrationJobStatusDetail1 {
	CheckItem: DescribeMigrationJobStatusCheckItem2[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobStatusPrecheckStatus0
export interface DescribeMigrationJobStatusPrecheckStatus0 {
	Status: string;
	Percent: string;
	Detail: DescribeMigrationJobStatusDetail1[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobStatusStructureInitializationStatus0
export interface DescribeMigrationJobStatusStructureInitializationStatus0 {
	Status: string;
	Percent: string;
	ErrorMessage: string;
	Progress: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobStatusDataInitializationStatus0
export interface DescribeMigrationJobStatusDataInitializationStatus0 {
	Status: string;
	Percent: string;
	ErrorMessage: string;
	Progress: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobStatusDataSynchronizationStatus0
export interface DescribeMigrationJobStatusDataSynchronizationStatus0 {
	Status: string;
	Percent: string;
	ErrorMessage: string;
	Delay: string;
	Checkpoint: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobStatusResponse
export interface DescribeMigrationJobStatusResponse {
	MigrationJobId: string;
	MigrationJobName: string;
	PayType: string;
	MigrationJobClass: string;
	MigrationObject: string;
	MigrationJobStatus: string;
	SourceEndpoint: DescribeMigrationJobStatusSourceEndpoint0;
	DestinationEndpoint: DescribeMigrationJobStatusDestinationEndpoint0;
	MigrationMode: DescribeMigrationJobStatusMigrationMode0;
	PrecheckStatus: DescribeMigrationJobStatusPrecheckStatus0;
	StructureInitializationStatus: DescribeMigrationJobStatusStructureInitializationStatus0;
	DataInitializationStatus: DescribeMigrationJobStatusDataInitializationStatus0;
	DataSynchronizationStatus: DescribeMigrationJobStatusDataSynchronizationStatus0;
}

