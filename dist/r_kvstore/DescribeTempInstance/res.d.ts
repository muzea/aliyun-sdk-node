// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.TempInstance
export interface TempInstance {
	InstanceId: string;
	TempInstanceId: string;
	SnapshotId: string;
	CreateTime: string;
	Domain: string;
	Status: string;
	Memory: number;
	ExpireTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.TempInstances
export interface TempInstances {
	TempInstance: TempInstance[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DescribeTempInstanceResponse
export interface DescribeTempInstanceResponse {
	RequestId: string;
	TempInstances: TempInstances;
}

