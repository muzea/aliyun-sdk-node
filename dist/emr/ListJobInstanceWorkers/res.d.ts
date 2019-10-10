// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.JobInstanceWorkerInfo
export interface JobInstanceWorkerInfo {
	ApplicationId: string;
	InstanceInfo: string;
	ContainerInfo: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.JobInstanceWorkers
export interface JobInstanceWorkers {
	JobInstanceWorkerInfo: JobInstanceWorkerInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListJobInstanceWorkersResponse
export interface ListJobInstanceWorkersResponse {
	RequestId: string;
	JobInstanceWorkers: JobInstanceWorkers;
}

