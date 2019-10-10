// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationObjectModifyStatusCheckItem2
export interface DescribeSynchronizationObjectModifyStatusCheckItem2 {
	ItemName: string;
	CheckStatus: string;
	ErrorMessage: string;
	RepairMethod: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationObjectModifyStatusDetail1
export interface DescribeSynchronizationObjectModifyStatusDetail1 {
	CheckItem: DescribeSynchronizationObjectModifyStatusCheckItem2[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationObjectModifyStatusPrecheckStatus0
export interface DescribeSynchronizationObjectModifyStatusPrecheckStatus0 {
	Status: string;
	Percent: string;
	Detail: DescribeSynchronizationObjectModifyStatusDetail1[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationObjectModifyStatusStructureInitializationStatus0
export interface DescribeSynchronizationObjectModifyStatusStructureInitializationStatus0 {
	Status: string;
	Percent: string;
	ErrorMessage: string;
	Progress: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationObjectModifyStatusDataInitializationStatus0
export interface DescribeSynchronizationObjectModifyStatusDataInitializationStatus0 {
	Status: string;
	Percent: string;
	ErrorMessage: string;
	Progress: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationObjectModifyStatusDataSynchronizationStatus0
export interface DescribeSynchronizationObjectModifyStatusDataSynchronizationStatus0 {
	Status: string;
	Percent: string;
	ErrorMessage: string;
	Delay: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dts.DescribeSynchronizationObjectModifyStatusResponse
export interface DescribeSynchronizationObjectModifyStatusResponse {
	RequestId: string;
	Status: string;
	ErrorMessage: string;
	PrecheckStatus: DescribeSynchronizationObjectModifyStatusPrecheckStatus0;
	StructureInitializationStatus: DescribeSynchronizationObjectModifyStatusStructureInitializationStatus0;
	DataInitializationStatus: DescribeSynchronizationObjectModifyStatusDataInitializationStatus0;
	DataSynchronizationStatus: DescribeSynchronizationObjectModifyStatusDataSynchronizationStatus0;
}

