// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.Items
export interface Items {
	Region: string;
	Count: number;
	DBInstanceDescription: string;
	Engine: string;
	ReadWriteType: string;
	DomainMode: string;
	ReplicaStatus: string;
	ReplicaMode: string;
	DBInstanceStatus: string;
	RegionId: string;
	Role: string;
	InstanceNetworkType: string;
	ReplicaDescription: string;
	DBInstanceId: string;
	TaskType: string;
	ReplicaId: string;
	DBInstances: Items[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.DescribeReplicasResponse
export interface DescribeReplicasResponse {
	RequestId: string;
	PageNumber: string;
	TotalRecordCount: number;
	PageRecordCount: number;
	Replicas: Items[];
}

