// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.ReadOnlyDBInstanceId
export interface ReadOnlyDBInstanceId {
	ReadOnlyDBInstanceId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DBInstanceInDescribeDbInstances
export interface DBInstanceInDescribeDbInstances {
	DBInstanceId: string;
	DBInstanceStatus: number;
	DBInstanceType: string;
	Engine: string;
	EngineVersion: string;
	RegionId: string;
	ZoneId: string;
	DBInstanceDescription: string;
	InstanceNetworkType: string;
	ReadOnlyDBInstanceId: ReadOnlyDBInstanceId;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.ItemsInDescribeDbInstances
export interface ItemsInDescribeDbInstances {
	DBInstance: DBInstanceInDescribeDbInstances[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeDbInstancesResponse
export interface DescribeDbInstancesResponse {
	RequestId: string;
	Items: ItemsInDescribeDbInstances;
}

