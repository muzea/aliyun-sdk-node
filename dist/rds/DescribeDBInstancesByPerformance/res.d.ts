// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DBInstancePerformance
export interface DBInstancePerformance {
	CPUUsage: string;
	IOPSUsage: string;
	DiskUsage: string;
	SessionUsage: string;
	DBInstanceId: string;
	DBInstanceDescription: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsInDescribeDBInstancesByPerformance
export interface ItemsInDescribeDBInstancesByPerformance {
	DBInstancePerformance: DBInstancePerformance[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeDBInstancesByPerformanceResponse
export interface DescribeDBInstancesByPerformanceResponse {
	RequestId: string;
	PageNumber: number;
	TotalRecordCount: number;
	PageRecordCount: number;
	Items: ItemsInDescribeDBInstancesByPerformance;
}

