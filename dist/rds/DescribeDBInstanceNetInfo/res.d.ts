// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.SecurityIPGroup
export interface SecurityIPGroup {
	SecurityIPGroupName: string;
	SecurityIPs: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.SecurityIPGroups
export interface SecurityIPGroups {
	securityIPGroup: SecurityIPGroup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DBInstanceWeight
export interface DBInstanceWeight {
	Availability: string;
	DBInstanceType: string;
	DBInstanceId: string;
	ReadonlyInstanceSQLDelayedTime: string;
	Weight: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DBInstanceWeights
export interface DBInstanceWeights {
	DBInstanceWeight: DBInstanceWeight[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DBInstanceNetInfo
export interface DBInstanceNetInfo {
	Upgradeable: string;
	ExpiredTime: string;
	ConnectionString: string;
	IPAddress: string;
	IPType: string;
	Port: string;
	VPCId: string;
	VSwitchId: string;
	ConnectionStringType: string;
	MaxDelayTime: string;
	DistributionType: string;
	SecurityIPGroups: SecurityIPGroups;
	DBInstanceWeights: DBInstanceWeights;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DBInstanceNetInfos
export interface DBInstanceNetInfos {
	DBInstanceNetInfo: DBInstanceNetInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeDBInstanceNetInfoResponse
export interface DescribeDBInstanceNetInfoResponse {
	RequestId: string;
	InstanceNetworkType: string;
	SecurityIPMode: string;
	DBInstanceNetInfos: DBInstanceNetInfos;
}

