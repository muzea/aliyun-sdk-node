// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.Metric
export interface Metric {
	Dps: { [key: string]: any };
	Summary: number;
	MetricName: string;
	Tags: { [key: string]: any };
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.MetricsInGetInstanceMetric
export interface MetricsInGetInstanceMetric {
	Metric: Metric[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.GetInstanceMetricResponse
export interface GetInstanceMetricResponse {
	RequestId: string;
	Metrics: MetricsInGetInstanceMetric;
}

