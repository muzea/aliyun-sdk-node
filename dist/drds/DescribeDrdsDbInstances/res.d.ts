// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.ReadOnlyInstanceInDescribeDrdsDbInstances
export interface ReadOnlyInstanceInDescribeDrdsDbInstances {
	InstanceName: string;
	ConnectUrl: string;
	Port: number;
	DBInstanceStatus: string;
	DbInstType: string;
	ReadWeight: number;
	NetworkType: string;
	Engine: string;
	EngineVersion: string;
	RdsInstType: string;
	PayType: string;
	ExpireTime: string;
	RemainDays: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.ReadOnlyInstancesInDescribeDrdsDbInstances
export interface ReadOnlyInstancesInDescribeDrdsDbInstances {
	ReadOnlyInstance: ReadOnlyInstanceInDescribeDrdsDbInstances[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DbInstanceInDescribeDrdsDbInstances
export interface DbInstanceInDescribeDrdsDbInstances {
	DBInstanceId: string;
	ConnectUrl: string;
	Port: number;
	DBInstanceStatus: string;
	DbInstType: string;
	ReadWeight: number;
	NetworkType: string;
	Engine: string;
	EngineVersion: string;
	RdsInstType: string;
	PayType: string;
	ExpireTime: string;
	RemainDays: number;
	ReadOnlyInstances: ReadOnlyInstancesInDescribeDrdsDbInstances;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DbInstancesInDescribeDrdsDbInstances
export interface DbInstancesInDescribeDrdsDbInstances {
	DbInstance: DbInstanceInDescribeDrdsDbInstances[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeDrdsDbInstancesResponse
export interface DescribeDrdsDbInstancesResponse {
	RequestId: string;
	Success: boolean;
	PageNumber: string;
	PageSize: string;
	Total: string;
	DbInstances: DbInstancesInDescribeDrdsDbInstances;
}

