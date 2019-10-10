// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DBInstanceWeight
export interface DBInstanceWeight {
	Availability: string;
	DBInstanceType: string;
	DBInstanceId: string;
	ReadonlyInstanceSQLDelayedTime: string;
	Weight: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsInCalculateDBInstanceWeight
export interface ItemsInCalculateDBInstanceWeight {
	DBInstanceWeight: DBInstanceWeight[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.CalculateDBInstanceWeightResponse
export interface CalculateDBInstanceWeightResponse {
	RequestId: string;
	Items: ItemsInCalculateDBInstanceWeight;
}

