// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeInitializationStatusStructureInitializationDetail2
export interface DescribeInitializationStatusStructureInitializationDetail2 {
	ObjectName: string;
	ObjectType: string;
	SourceOwnerDBName: string;
	DestinationOwnerDBName: string;
	Status: string;
	ErrorMessage: string;
	ObjectDefinition: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeInitializationStatusConstraints1
export interface DescribeInitializationStatusConstraints1 {
	StructureInitializationDetail: DescribeInitializationStatusStructureInitializationDetail2[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeInitializationStatusStructureInitializationDetail1
export interface DescribeInitializationStatusStructureInitializationDetail1 {
	ObjectName: string;
	ObjectType: string;
	SourceOwnerDBName: string;
	DestinationOwnerDBName: string;
	Status: string;
	ErrorMessage: string;
	ObjectDefinition: string;
	Constraints: DescribeInitializationStatusConstraints1[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeInitializationStatusStructureInitializationDetails0
export interface DescribeInitializationStatusStructureInitializationDetails0 {
	StructureInitializationDetail: DescribeInitializationStatusStructureInitializationDetail1[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeInitializationStatusDataInitializationDetail1
export interface DescribeInitializationStatusDataInitializationDetail1 {
	TableName: string;
	SourceOwnerDBName: string;
	DestinationOwnerDBName: string;
	Status: string;
	ErrorMessage: string;
	TotalRowNum: string;
	FinishRowNum: string;
	UsedTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeInitializationStatusDataInitializationDetails0
export interface DescribeInitializationStatusDataInitializationDetails0 {
	DataInitializationDetail: DescribeInitializationStatusDataInitializationDetail1[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeInitializationStatusDataSynchronizationDetail1
export interface DescribeInitializationStatusDataSynchronizationDetail1 {
	TableName: string;
	SourceOwnerDBName: string;
	DestinationOwnerDBName: string;
	Status: string;
	ErrorMessage: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeInitializationStatusDataSynchronizationDetails0
export interface DescribeInitializationStatusDataSynchronizationDetails0 {
	DataSynchronizationDetail: DescribeInitializationStatusDataSynchronizationDetail1[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeInitializationStatusResponse
export interface DescribeInitializationStatusResponse {
	StructureInitializationDetails: DescribeInitializationStatusStructureInitializationDetails0;
	DataInitializationDetails: DescribeInitializationStatusDataInitializationDetails0;
	DataSynchronizationDetails: DescribeInitializationStatusDataSynchronizationDetails0;
}

