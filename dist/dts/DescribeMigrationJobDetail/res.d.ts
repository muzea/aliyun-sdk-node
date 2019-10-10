// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobDetailStructureInitializationDetail2
export interface DescribeMigrationJobDetailStructureInitializationDetail2 {
	ObjectName: string;
	ObjectType: string;
	SourceOwnerDBName: string;
	DestinationOwnerDBName: string;
	Status: string;
	ErrorMessage: string;
	ObjectDefinition: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobDetailConstraintList1
export interface DescribeMigrationJobDetailConstraintList1 {
	StructureInitializationDetail: DescribeMigrationJobDetailStructureInitializationDetail2[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobDetailStructureInitializationDetail1
export interface DescribeMigrationJobDetailStructureInitializationDetail1 {
	ObjectName: string;
	ObjectType: string;
	SourceOwnerDBName: string;
	DestinationOwnerDBName: string;
	Status: string;
	ErrorMessage: string;
	ObjectDefinition: string;
	ConstraintList: DescribeMigrationJobDetailConstraintList1[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobDetailStructureInitializationDetailList0
export interface DescribeMigrationJobDetailStructureInitializationDetailList0 {
	StructureInitializationDetail: DescribeMigrationJobDetailStructureInitializationDetail1[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobDetailDataInitializationDetail1
export interface DescribeMigrationJobDetailDataInitializationDetail1 {
	TableName: string;
	SourceOwnerDBName: string;
	DestinationOwnerDBName: string;
	Status: string;
	ErrorMessage: string;
	TotalRowNum: string;
	FinishRowNum: string;
	MigrationTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobDetailDataInitializationDetailList0
export interface DescribeMigrationJobDetailDataInitializationDetailList0 {
	DataInitializationDetail: DescribeMigrationJobDetailDataInitializationDetail1[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobDetailDataSynchronizationDetail1
export interface DescribeMigrationJobDetailDataSynchronizationDetail1 {
	TableName: string;
	SourceOwnerDBName: string;
	DestinationOwnerDBName: string;
	Status: string;
	ErrorMessage: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobDetailDataSynchronizationDetailList0
export interface DescribeMigrationJobDetailDataSynchronizationDetailList0 {
	DataSynchronizationDetail: DescribeMigrationJobDetailDataSynchronizationDetail1[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeMigrationJobDetailResponse
export interface DescribeMigrationJobDetailResponse {
	PageNumber: number;
	TotalRecordCount: number;
	PageRecordCount: number;
	StructureInitializationDetailList: DescribeMigrationJobDetailStructureInitializationDetailList0;
	DataInitializationDetailList: DescribeMigrationJobDetailDataInitializationDetailList0;
	DataSynchronizationDetailList: DescribeMigrationJobDetailDataSynchronizationDetailList0;
}

