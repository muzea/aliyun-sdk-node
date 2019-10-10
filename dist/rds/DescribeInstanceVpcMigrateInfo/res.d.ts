// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DBInstanceMigrateInfo
export interface DBInstanceMigrateInfo {
	DBInstanceId: string;
	TargetRegionId: string;
	TargetZoneId: string;
	TargetVPCId: string;
	TargetVSwitchId: string;
	TargetIPAddress: string;
	TargetVpcInstanceId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DBInstanceMigrateInfos
export interface DBInstanceMigrateInfos {
	DBInstanceMigrateInfo: DBInstanceMigrateInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeInstanceVpcMigrateInfoResponse
export interface DescribeInstanceVpcMigrateInfoResponse {
	RequestId: string;
	DBInstanceMigrateInfos: DBInstanceMigrateInfos;
}

