// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.Rule
export interface Rule {
	RuleType: string;
	UpdateTime: number;
	Granularity: string;
	CreateTime: number;
	RuleId: string;
	State: number;
	Threshold: number;
	AppId: string;
	ConsumerAppId: string;
	Strategy: string;
	Duration: number;
	Id: string;
	RtThreshold: number;
	Resource: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.RuleResultListInListDegradeControls
export interface RuleResultListInListDegradeControls {
	Rule: Rule[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.RuleList
export interface RuleList {
	CurrentPage: number;
	pageSize: number;
	TotalSize: number;
	RuleResultList: RuleResultListInListDegradeControls;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.App
export interface App {
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.AppList
export interface AppList {
	App: App[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.MethodsInListFlowControls
export interface MethodsInListFlowControls {
	Method: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.InterfaceMethod
export interface InterfaceMethod {
	Version: string;
	name: string;
	Methods: MethodsInListFlowControls;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.InterfaceMethodsInListFlowControls
export interface InterfaceMethodsInListFlowControls {
	InterfaceMethod: InterfaceMethod[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.FlowControlsMap
export interface FlowControlsMap {
	AppId: string;
	AppName: string;
	RuleList: RuleList;
	AppList: AppList;
	InterfaceMethods: InterfaceMethodsInListFlowControls;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ListDegradeControlsResponse
export interface ListDegradeControlsResponse {
	Code: number;
	Message: string;
	RequestId: string;
	FlowControlsMap: FlowControlsMap;
}

