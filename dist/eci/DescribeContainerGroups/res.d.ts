// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupsLabel1
export interface DescribeContainerGroupsLabel1 {
	Key: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupsEvent1
export interface DescribeContainerGroupsEvent1 {
	Count: number;
	Type: string;
	Name: string;
	Message: string;
	FirstTimestamp: string;
	LastTimestamp: string;
	Reason: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupsVolumeMount2
export interface DescribeContainerGroupsVolumeMount2 {
	Name: string;
	MountPath: string;
	ReadOnly: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupsPort2
export interface DescribeContainerGroupsPort2 {
	Port: number;
	Protocol: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupsFieldRef4
export interface DescribeContainerGroupsFieldRef4 {
	FieldPath: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupsValueFrom3
export interface DescribeContainerGroupsValueFrom3 {
	FieldRef: DescribeContainerGroupsFieldRef4;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupsEnvironmentVar2
export interface DescribeContainerGroupsEnvironmentVar2 {
	Key: string;
	Value: string;
	ValueFrom: DescribeContainerGroupsValueFrom3;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupsPreviousState2
export interface DescribeContainerGroupsPreviousState2 {
	State: string;
	DetailStatus: string;
	ExitCode: number;
	StartTime: string;
	FinishTime: string;
	Reason: string;
	Message: string;
	Signal: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupsCurrentState2
export interface DescribeContainerGroupsCurrentState2 {
	State: string;
	DetailStatus: string;
	ExitCode: number;
	StartTime: string;
	FinishTime: string;
	Reason: string;
	Message: string;
	Signal: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupsHttpGet3
export interface DescribeContainerGroupsHttpGet3 {
	Path: string;
	Port: number;
	Scheme: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupsTcpSocket3
export interface DescribeContainerGroupsTcpSocket3 {
	Host: string;
	Port: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupsReadinessProbe2
export interface DescribeContainerGroupsReadinessProbe2 {
	InitialDelaySeconds: number;
	PeriodSeconds: number;
	TimeoutSeconds: number;
	SuccessThreshold: number;
	FailureThreshold: number;
	Execs: string[];
	HttpGet: DescribeContainerGroupsHttpGet3;
	TcpSocket: DescribeContainerGroupsTcpSocket3;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupsLivenessProbe2
export interface DescribeContainerGroupsLivenessProbe2 {
	InitialDelaySeconds: number;
	PeriodSeconds: number;
	TimeoutSeconds: number;
	SuccessThreshold: number;
	FailureThreshold: number;
	Execs: string[];
	HttpGet: DescribeContainerGroupsHttpGet3;
	TcpSocket: DescribeContainerGroupsTcpSocket3;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupsCapability3
export interface DescribeContainerGroupsCapability3 {
	Adds: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupsSecurityContext2
export interface DescribeContainerGroupsSecurityContext2 {
	ReadOnlyRootFilesystem: boolean;
	RunAsUser: number;
	Capability: DescribeContainerGroupsCapability3;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupsContainer1
export interface DescribeContainerGroupsContainer1 {
	Name: string;
	Image: string;
	Memory: number;
	Cpu: number;
	RestartCount: number;
	WorkingDir: string;
	ImagePullPolicy: string;
	Ready: boolean;
	Gpu: number;
	VolumeMounts: DescribeContainerGroupsVolumeMount2[];
	Ports: DescribeContainerGroupsPort2[];
	EnvironmentVars: DescribeContainerGroupsEnvironmentVar2[];
	Commands: string[];
	Args: string[];
	PreviousState: DescribeContainerGroupsPreviousState2;
	CurrentState: DescribeContainerGroupsCurrentState2;
	ReadinessProbe: DescribeContainerGroupsReadinessProbe2;
	LivenessProbe: DescribeContainerGroupsLivenessProbe2;
	SecurityContext: DescribeContainerGroupsSecurityContext2;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupsConfigFileVolumeConfigFileToPath2
export interface DescribeContainerGroupsConfigFileVolumeConfigFileToPath2 {
	Content: string;
	Path: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupsVolume1
export interface DescribeContainerGroupsVolume1 {
	Type: string;
	Name: string;
	NFSVolumePath: string;
	NFSVolumeServer: string;
	NFSVolumeReadOnly: boolean;
	DiskVolumeDiskId: string;
	DiskVolumeFsType: string;
	ConfigFileVolumeConfigFileToPaths: DescribeContainerGroupsConfigFileVolumeConfigFileToPath2[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupsHostAliase1
export interface DescribeContainerGroupsHostAliase1 {
	Ip: string;
	Hostnames: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupsOption2
export interface DescribeContainerGroupsOption2 {
	Name: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupsDnsConfig1
export interface DescribeContainerGroupsDnsConfig1 {
	Options: DescribeContainerGroupsOption2[];
	NameServers: string[];
	Searches: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupsSysctl2
export interface DescribeContainerGroupsSysctl2 {
	Name: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupsEciSecurityContext1
export interface DescribeContainerGroupsEciSecurityContext1 {
	Sysctls: DescribeContainerGroupsSysctl2[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupsContainerGroup0
export interface DescribeContainerGroupsContainerGroup0 {
	ContainerGroupId: string;
	ContainerGroupName: string;
	RegionId: string;
	ZoneId: string;
	Memory: number;
	Cpu: number;
	VSwitchId: string;
	SecurityGroupId: string;
	RestartPolicy: string;
	IntranetIp: string;
	Status: string;
	InternetIp: string;
	CreationTime: string;
	SucceededTime: string;
	EniInstanceId: string;
	InstanceType: string;
	ExpiredTime: string;
	FailedTime: string;
	RamRoleName: string;
	Tags: DescribeContainerGroupsLabel1[];
	Events: DescribeContainerGroupsEvent1[];
	Containers: DescribeContainerGroupsContainer1[];
	Volumes: DescribeContainerGroupsVolume1[];
	InitContainers: DescribeContainerGroupsContainer1[];
	HostAliases: DescribeContainerGroupsHostAliase1[];
	DnsConfig: DescribeContainerGroupsDnsConfig1;
	EciSecurityContext: DescribeContainerGroupsEciSecurityContext1;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/eci.DescribeContainerGroupsResponse
export interface DescribeContainerGroupsResponse {
	RequestId: string;
	NextToken: string;
	TotalCount: number;
	ContainerGroups: DescribeContainerGroupsContainerGroup0[];
}

