// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.RiskCheckJobConfig
export interface RiskCheckJobConfig {
	StartTime: number;
	EndTime: number;
	DaysOfWeek: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sas.DescribeSecurityCheckScheduleConfigResponse
export interface DescribeSecurityCheckScheduleConfigResponse {
	RequestId: string;
	RiskCheckJobConfig: RiskCheckJobConfig;
}

