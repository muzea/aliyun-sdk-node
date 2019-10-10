// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ApplicationInListApplication
export interface ApplicationInListApplication {
	AppId: string;
	Name: string;
	RegionId: string;
	Description: string;
	Owner: string;
	InstanceCount: number;
	RunningInstanceCount: number;
	Port: number;
	UserId: string;
	SlbId: string;
	SlbIp: string;
	SlbPort: number;
	ExtSlbId: string;
	ExtSlbIp: string;
	ApplicationType: string;
	ClusterType: number;
	ClusterId: string;
	Dockerize: boolean;
	Cpu: number;
	Memory: number;
	HealthCheckUrl: string;
	BuildPackageId: number;
	CreateTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ApplicationList
export interface ApplicationList {
	Application: ApplicationInListApplication[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ListApplicationResponse
export interface ListApplicationResponse {
	Code: number;
	Message: string;
	RequestId: string;
	ApplicationList: ApplicationList;
}

