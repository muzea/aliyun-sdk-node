// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.MonitorGroup
export interface MonitorGroup {
	Id: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.ScalingGroup
export interface ScalingGroup {
	Id: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.Vpc
export interface Vpc {
	Id: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.Instance
export interface Instance {
	Id: string;
	Imported: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.Instances
export interface Instances {
	Instance: Instance[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.VSwitch
export interface VSwitch {
	Id: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.VSwitches
export interface VSwitches {
	VSwitch: VSwitch[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.LoadBalancer
export interface LoadBalancer {
	Id: string;
	AddressType: string;
	Port: number;
	Protocol: string;
	Imported: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.LoadBalancers
export interface LoadBalancers {
	LoadBalancer: LoadBalancer[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.SecurityGroup
export interface SecurityGroup {
	Id: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.DefaultSecurityGroups
export interface DefaultSecurityGroups {
	SecurityGroup: SecurityGroup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.RdsInstance
export interface RdsInstance {
	Id: string;
	Imported: boolean;
	DatabaseName: string;
	AccountName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.RdsInstances
export interface RdsInstances {
	RdsInstance: RdsInstance[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.EnvResource
export interface EnvResource {
	EnvId: string;
	EnvName: string;
	LaunchConfigurationId: string;
	LaunchTemplateId: string;
	MonitorGroup: MonitorGroup;
	ScalingGroup: ScalingGroup;
	Vpc: Vpc;
	Instances: Instances;
	VSwitches: VSwitches;
	LoadBalancers: LoadBalancers;
	DefaultSecurityGroups: DefaultSecurityGroups;
	RdsInstances: RdsInstances;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/webplus.DescribeEnvResourceResponse
export interface DescribeEnvResourceResponse {
	RequestId: string;
	Code: string;
	Message: string;
	EnvResource: EnvResource;
}

