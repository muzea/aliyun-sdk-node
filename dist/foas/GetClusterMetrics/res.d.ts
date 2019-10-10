// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.Metric
export interface Metric {
	Dps: { [key: string]: any };
	Summary: number;
	MetricName: string;
	Tags: { [key: string]: any };
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.MetricsInGetClusterMetrics
export interface MetricsInGetClusterMetrics {
	Metric: Metric[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.GetClusterMetricsResponse
export interface GetClusterMetricsResponse {
	RequestId: string;
	Metrics: MetricsInGetClusterMetrics;
}

