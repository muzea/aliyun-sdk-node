// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.InstanceNetInfo
export interface InstanceNetInfo {
	ConnectionString: string;
	IPAddress: string;
	Port: string;
	VPCId: string;
	VSwitchId: string;
	DBInstanceNetType: string;
	VPCInstanceId: string;
	IPType: string;
	ExpiredTime: string;
	Upgradeable: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.NetInfoItemsInDescribeDBInstanceNetInfo
export interface NetInfoItemsInDescribeDBInstanceNetInfo {
	InstanceNetInfo: InstanceNetInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DescribeDBInstanceNetInfoResponse
export interface DescribeDBInstanceNetInfoResponse {
	RequestId: string;
	InstanceNetworkType: string;
	NetInfoItems: NetInfoItemsInDescribeDBInstanceNetInfo;
}

