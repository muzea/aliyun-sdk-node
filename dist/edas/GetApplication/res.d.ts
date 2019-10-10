// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.Applcation
export interface Applcation {
	Name: string;
	CreateTime: number;
	Dockerize: boolean;
	RegionId: string;
	SlbPort: number;
	UserId: string;
	ApplicationType: string;
	Description: string;
	ClusterId: string;
	Port: number;
	ExtSlbIp: string;
	BuildPackageId: number;
	Memory: number;
	ExtSlbId: string;
	Owner: string;
	ExtSlbName: string;
	SlbName: string;
	AppId: string;
	InstanceCount: number;
	HealthCheckUrl: string;
	SlbId: string;
	ClusterType: number;
	Cpu: number;
	RunningInstanceCount: number;
	SlbIp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.GetApplicationResponse
export interface GetApplicationResponse {
	Code: number;
	Message: string;
	RequestId: string;
	Applcation: Applcation;
}

