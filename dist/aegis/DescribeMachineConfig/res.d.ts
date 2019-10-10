// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.ConfigTarget
export interface ConfigTarget {
	Flag: string;
	Target: string;
	TargetType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.DescribeMachineConfigResponse
export interface DescribeMachineConfigResponse {
	RequestId: string;
	Count: number;
	ConfigTargets: ConfigTarget[];
}

