// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.FailedEcs
export interface FailedEcs {
	Reason: string;
	InstanceName: string;
	IP: string;
	IntranetIp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.DescribeStrategyExecDetailResponse
export interface DescribeStrategyExecDetailResponse {
	RequestId: string;
	StartTime: string;
	EndTime: string;
	Source: string;
	Percent: string;
	SuccessCount: number;
	FailCount: number;
	InProcessCount: number;
	FailedEcsList: FailedEcs[];
}

