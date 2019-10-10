// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ProfilingInfo
export interface ProfilingInfo {
	ProfilingId: string;
	InstanceId: string;
	HostName: string;
	Pid: number;
	Duration: number;
	Freq: number;
	TriggerTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.Profilings
export interface Profilings {
	ProfilingInfo: ProfilingInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.ListCloudMetricProfilingsResponse
export interface ListCloudMetricProfilingsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Profilings: Profilings;
}

