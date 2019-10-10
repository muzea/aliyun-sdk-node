// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.TargetAzones
export interface TargetAzones {
	TargetAzone: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.Result
export interface Result {
	OriginAzoneId: string;
	RegionId: string;
	SwitchAble: boolean;
	TargetAzones: TargetAzones;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeInstanceSwitchAzoneResponse
export interface DescribeInstanceSwitchAzoneResponse {
	RequestId: string;
	Success: boolean;
	Result: Result;
}

