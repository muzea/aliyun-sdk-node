// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DBInstanceExpireTime
export interface DBInstanceExpireTime {
	DBInstanceId: string;
	DBInstanceDescription: string;
	ExpireTime: string;
	DBInstanceStatus: string;
	LockMode: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsInDescribeDBInstancesByExpireTime
export interface ItemsInDescribeDBInstancesByExpireTime {
	DBInstanceExpireTime: DBInstanceExpireTime[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeDBInstancesByExpireTimeResponse
export interface DescribeDBInstancesByExpireTimeResponse {
	RequestId: string;
	PageNumber: number;
	TotalRecordCount: number;
	PageRecordCount: number;
	Items: ItemsInDescribeDBInstancesByExpireTime;
}

