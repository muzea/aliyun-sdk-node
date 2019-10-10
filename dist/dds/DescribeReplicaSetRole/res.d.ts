// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.ReplicaSet
export interface ReplicaSet {
	VPCCloudInstanceId: string;
	ConnectionPort: string;
	RoleId: string;
	ExpiredTime: string;
	VPCId: string;
	VSwitchId: string;
	ReplicaSetRole: string;
	ConnectionDomain: string;
	NetworkType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.ReplicaSetsInDescribeReplicaSetRole
export interface ReplicaSetsInDescribeReplicaSetRole {
	ReplicaSet: ReplicaSet[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.DescribeReplicaSetRoleResponse
export interface DescribeReplicaSetRoleResponse {
	RequestId: string;
	DBInstanceId: string;
	ReplicaSets: ReplicaSetsInDescribeReplicaSetRole;
}

