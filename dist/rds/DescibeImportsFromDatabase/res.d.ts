// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ImportResultFromDB
export interface ImportResultFromDB {
	ImportId: number;
	ImportDataType: string;
	ImportDataStatus: string;
	ImportDataStatusDescription: string;
	IncrementalImportingTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsInDescibeImportsFromDatabase
export interface ItemsInDescibeImportsFromDatabase {
	ImportResultFromDB: ImportResultFromDB[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescibeImportsFromDatabaseResponse
export interface DescibeImportsFromDatabaseResponse {
	RequestId: string;
	TotalRecordCount: number;
	PageNumber: number;
	PageRecordCount: number;
	Items: ItemsInDescibeImportsFromDatabase;
}

