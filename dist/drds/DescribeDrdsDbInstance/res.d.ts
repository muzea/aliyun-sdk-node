// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.Endpoint
export interface Endpoint {
	NodeIds: string;
	EndpointId: string;
	ReadWeight: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.Endpoints
export interface Endpoints {
	Endpoint: Endpoint[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DBNode
export interface DBNode {
	DBNodeId: string;
	ZoneId: string;
	DBNodeStatus: string;
	DBNodeRole: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DBNodes
export interface DBNodes {
	DBNode: DBNode[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.ReadOnlyInstance
export interface ReadOnlyInstance {
	ReadWeight: number;
	Port: number;
	DbInstType: string;
	Engine: string;
	EngineVersion: string;
	RemainDays: string;
	PayType: string;
	VersionAction: number;
	RdsInstType: string;
	DBInstanceStatus: string;
	ConnectUrl: string;
	ExpireTime: string;
	DBInstanceId: string;
	NetworkType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.ReadOnlyInstancesInDescribeDrdsDbInstance
export interface ReadOnlyInstancesInDescribeDrdsDbInstance {
	ReadOnlyInstance: ReadOnlyInstance[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DbInstance
export interface DbInstance {
	ReadWeight: number;
	Port: number;
	DbInstType: string;
	Engine: string;
	EngineVersion: string;
	RemainDays: string;
	PayType: string;
	RdsInstType: string;
	DBInstanceStatus: string;
	ExpireTime: string;
	ConnectUrl: string;
	DBInstanceId: string;
	NetworkType: string;
	Endpoints: Endpoints;
	DBNodes: DBNodes;
	ReadOnlyInstances: ReadOnlyInstancesInDescribeDrdsDbInstance;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeDrdsDbInstanceResponse
export interface DescribeDrdsDbInstanceResponse {
	RequestId: string;
	Success: boolean;
	DbInstance: DbInstance;
}

