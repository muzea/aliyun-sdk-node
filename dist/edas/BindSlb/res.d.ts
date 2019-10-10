// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.Data
export interface Data {
	PackageType: string;
	ChangeOrderId: string;
	WebContainer: string;
	CommandArgs: string;
	MinReadyInstances: number;
	PackageVersion: string;
	AppDescription: string;
	Replicas: number;
	SlbPort: number;
	ImageUrl: string;
	VpcId: string;
	CustomHostAlias: string;
	BatchWaitTime: number;
	ExtSlbIp: string;
	Memory: number;
	VSwitchId: string;
	JarStartArgs: string;
	ExtSlbId: string;
	Liveness: string;
	Jdk: string;
	ExtSlbName: string;
	SlbName: string;
	Readiness: string;
	Command: string;
	VServerGroupId: string;
	AppId: string;
	ExtVServerGroupId: string;
	JarStartOptions: string;
	NamespaceId: string;
	Envs: string;
	Cpu: number;
	SlbId: string;
	AppName: string;
	PackageUrl: string;
	BuildPackId: number;
	SlbIp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.BindSlbResponse
export interface BindSlbResponse {
	Code: number;
	Message: string;
	RequestId: string;
	Data: Data;
}

