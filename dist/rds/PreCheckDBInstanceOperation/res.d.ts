// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.FailuresItem
export interface FailuresItem {
	Message: string;
	Code: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.FailuresInPreCheckDBInstanceOperation
export interface FailuresInPreCheckDBInstanceOperation {
	FailuresItem: FailuresItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.PreCheckDBInstanceOperationResponse
export interface PreCheckDBInstanceOperationResponse {
	RequestId: string;
	PreCheckResult: boolean;
	Failures: FailuresInPreCheckDBInstanceOperation;
}

