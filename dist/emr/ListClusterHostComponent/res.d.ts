// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.Component
export interface Component {
	HostInstanceId: string;
	HostId: string;
	PublicIp: string;
	NeedRestart: boolean;
	Memory: number;
	ComponentName: string;
	InstanceType: string;
	ComponentDisplayName: string;
	SerialNumber: string;
	ServerStatus: string;
	Role: string;
	PrivateIp: string;
	ServiceDisplayName: string;
	HostName: string;
	Status: string;
	Cpu: number;
	ServiceName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ComponentListInListClusterHostComponent
export interface ComponentListInListClusterHostComponent {
	Component: Component[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListClusterHostComponentResponse
export interface ListClusterHostComponentResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	Total: number;
	ComponentList: ComponentListInListClusterHostComponent;
}

