// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.Items
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DescribeActiveOperationTaskRegionResponse
export interface DescribeActiveOperationTaskRegionResponse {
	RequestId: string;
	RegionList: Items[];
}

