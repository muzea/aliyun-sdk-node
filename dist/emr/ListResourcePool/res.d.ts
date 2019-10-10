// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.EcmResourcePool
export interface EcmResourcePool {
	Name: string;
	PoolType: string;
	YarnSiteConfig: string;
	UserId: string;
	Active: boolean;
	Id: number;
	Note: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.EcmResourceQueue
export interface EcmResourceQueue {
	Name: string;
	QualifiedName: string;
	UserId: string;
	QueueType: string;
	Id: number;
	ParentQueueId: number;
	Status: string;
	Leaf: boolean;
	ResourcePoolId: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.EcmResourcePoolConfig
export interface EcmResourcePoolConfig {
	Category: string;
	ConfigType: string;
	Id: number;
	ConfigKey: string;
	ConfigValue: string;
	Status: string;
	Note: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.EcmResourcePoolConfigListInListResourcePoolForAdmin
export interface EcmResourcePoolConfigListInListResourcePoolForAdmin {
	EcmResourcePoolConfig: EcmResourcePoolConfig[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.Queue
export interface Queue {
	EcmResourceQueue: EcmResourceQueue;
	EcmResourcePoolConfigList: EcmResourcePoolConfigListInListResourcePoolForAdmin;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.QueueListInListResourcePoolForAdmin
export interface QueueListInListResourcePoolForAdmin {
	Queue: Queue[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.PoolInfo
export interface PoolInfo {
	EcmResourcePool: EcmResourcePool;
	QueueList: QueueListInListResourcePoolForAdmin;
	EcmResourcePoolConfigList: EcmResourcePoolConfigListInListResourcePoolForAdmin;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.PoolInfoListInListResourcePool
export interface PoolInfoListInListResourcePool {
	PoolInfo: PoolInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListResourcePoolResponse
export interface ListResourcePoolResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	Total: number;
	PoolInfoList: PoolInfoListInListResourcePool;
}

