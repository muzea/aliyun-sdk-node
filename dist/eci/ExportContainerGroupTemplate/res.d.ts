// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.ExportContainerGroupTemplateTag1
export interface ExportContainerGroupTemplateTag1 {
	Key: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.ExportContainerGroupTemplateResources1
export interface ExportContainerGroupTemplateResources1 {
	Cpu: number;
	Memory: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.ExportContainerGroupTemplateItem4
export interface ExportContainerGroupTemplateItem4 {
	Mode: number;
	Path: string;
	Content: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.ExportContainerGroupTemplateConfigFile3
export interface ExportContainerGroupTemplateConfigFile3 {
	DefaultMode: number;
	Items: ExportContainerGroupTemplateItem4[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.ExportContainerGroupTemplateEmptyDir3
export interface ExportContainerGroupTemplateEmptyDir3 {
	SizeLimit: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.ExportContainerGroupTemplateNfs3
export interface ExportContainerGroupTemplateNfs3 {
	Server: string;
	Path: string;
	ReadOnly: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.ExportContainerGroupTemplateVolume2
export interface ExportContainerGroupTemplateVolume2 {
	Name: string;
	ConfigFile: ExportContainerGroupTemplateConfigFile3;
	EmptyDir: ExportContainerGroupTemplateEmptyDir3;
	Nfs: ExportContainerGroupTemplateNfs3;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.ExportContainerGroupTemplateFieldRef5
export interface ExportContainerGroupTemplateFieldRef5 {
	FieldPath: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.ExportContainerGroupTemplateValueFrom4
export interface ExportContainerGroupTemplateValueFrom4 {
	FieldRef: ExportContainerGroupTemplateFieldRef5;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.ExportContainerGroupTemplateEnv3
export interface ExportContainerGroupTemplateEnv3 {
	Name: string;
	Value: string;
	ValueFrom: ExportContainerGroupTemplateValueFrom4;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.ExportContainerGroupTemplatePort3
export interface ExportContainerGroupTemplatePort3 {
	Name: string;
	Protocol: string;
	ContainerPort: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.ExportContainerGroupTemplateVolumeMount3
export interface ExportContainerGroupTemplateVolumeMount3 {
	Name: string;
	SubPath: string;
	MountPath: string;
	ReadOnly: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.ExportContainerGroupTemplateSysctl4
export interface ExportContainerGroupTemplateSysctl4 {
	Name: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.ExportContainerGroupTemplateSecurityContext3
export interface ExportContainerGroupTemplateSecurityContext3 {
	Sysctls: ExportContainerGroupTemplateSysctl4[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.ExportContainerGroupTemplateResources3
export interface ExportContainerGroupTemplateResources3 {
	Cpu: number;
	Memory: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.ExportContainerGroupTemplateInitContainer2
export interface ExportContainerGroupTemplateInitContainer2 {
	Name: string;
	Image: string;
	ImagePullPolicy: string;
	Stdin: boolean;
	StdinOnce: boolean;
	Tty: boolean;
	WorkingDir: string;
	Env: ExportContainerGroupTemplateEnv3[];
	Ports: ExportContainerGroupTemplatePort3[];
	VolumeMounts: ExportContainerGroupTemplateVolumeMount3[];
	Command: string[];
	Args: string[];
	SecurityContext: ExportContainerGroupTemplateSecurityContext3;
	Resources: ExportContainerGroupTemplateResources3;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.ExportContainerGroupTemplateExec4
export interface ExportContainerGroupTemplateExec4 {
	Command: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.ExportContainerGroupTemplateTcpSocket4
export interface ExportContainerGroupTemplateTcpSocket4 {
	Port: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.ExportContainerGroupTemplateHttpGet4
export interface ExportContainerGroupTemplateHttpGet4 {
	Scheme: string;
	Path: string;
	Port: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.ExportContainerGroupTemplateReadinessProbe3
export interface ExportContainerGroupTemplateReadinessProbe3 {
	InitialDelaySeconds: number;
	PeriodSeconds: number;
	SuccessThreshold: number;
	FailureThreshold: number;
	TimeoutSeconds: number;
	Exec: ExportContainerGroupTemplateExec4;
	TcpSocket: ExportContainerGroupTemplateTcpSocket4;
	HttpGet: ExportContainerGroupTemplateHttpGet4;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.ExportContainerGroupTemplateLivenessProbe3
export interface ExportContainerGroupTemplateLivenessProbe3 {
	InitialDelaySeconds: number;
	PeriodSeconds: number;
	SuccessThreshold: number;
	FailureThreshold: number;
	TimeoutSeconds: number;
	Exec: ExportContainerGroupTemplateExec4;
	TcpSocket: ExportContainerGroupTemplateTcpSocket4;
	HttpGet: ExportContainerGroupTemplateHttpGet4;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.ExportContainerGroupTemplateContainers2
export interface ExportContainerGroupTemplateContainers2 {
	Name: string;
	Image: string;
	ImagePullPolicy: string;
	Stdin: boolean;
	StdinOnce: boolean;
	Tty: boolean;
	WorkingDir: string;
	Env: ExportContainerGroupTemplateEnv3[];
	Ports: ExportContainerGroupTemplatePort3[];
	VolumeMounts: ExportContainerGroupTemplateVolumeMount3[];
	Command: string[];
	Args: string[];
	SecurityContext: ExportContainerGroupTemplateSecurityContext3;
	Resources: ExportContainerGroupTemplateResources3;
	ReadinessProbe: ExportContainerGroupTemplateReadinessProbe3;
	LivenessProbe: ExportContainerGroupTemplateLivenessProbe3;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.ExportContainerGroupTemplateOption3
export interface ExportContainerGroupTemplateOption3 {
	Name: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.ExportContainerGroupTemplateDnsConfig2
export interface ExportContainerGroupTemplateDnsConfig2 {
	Options: ExportContainerGroupTemplateOption3[];
	NameServers: string[];
	Searches: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.ExportContainerGroupTemplateSysctl3
export interface ExportContainerGroupTemplateSysctl3 {
	Name: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.ExportContainerGroupTemplateSecurityContext2
export interface ExportContainerGroupTemplateSecurityContext2 {
	Sysctls: ExportContainerGroupTemplateSysctl3[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.ExportContainerGroupTemplateSpec1
export interface ExportContainerGroupTemplateSpec1 {
	RestartPolicy: string;
	DnsPolicy: string;
	Volumes: ExportContainerGroupTemplateVolume2[];
	InitContainers: ExportContainerGroupTemplateInitContainer2[];
	Containers: ExportContainerGroupTemplateContainers2[];
	DnsConfig: ExportContainerGroupTemplateDnsConfig2;
	SecurityContext: ExportContainerGroupTemplateSecurityContext2;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.ExportContainerGroupTemplateTemplate0
export interface ExportContainerGroupTemplateTemplate0 {
	RegionId: string;
	ZoneId: string;
	SecurityGroupId: string;
	VSwitchId: string;
	ResourceGroupId: string;
	EipInstanceId: string;
	ContainerGroupName: string;
	InstanceType: string;
	Tags: ExportContainerGroupTemplateTag1[];
	Resources: ExportContainerGroupTemplateResources1;
	Spec: ExportContainerGroupTemplateSpec1;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.ExportContainerGroupTemplateResponse
export interface ExportContainerGroupTemplateResponse {
	RequestId: string;
	Template: ExportContainerGroupTemplateTemplate0;
}

