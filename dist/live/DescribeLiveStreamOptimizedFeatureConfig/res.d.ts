// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.LiveStreamOptimizedFeatureConfig
export interface LiveStreamOptimizedFeatureConfig {
	DomainName: string;
	ConfigName: string;
	ConfigStatus: string;
	ConfigValue: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.LiveStreamOptimizedFeatureConfigList
export interface LiveStreamOptimizedFeatureConfigList {
	LiveStreamOptimizedFeatureConfig: LiveStreamOptimizedFeatureConfig[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeLiveStreamOptimizedFeatureConfigResponse
export interface DescribeLiveStreamOptimizedFeatureConfigResponse {
	RequestId: string;
	LiveStreamOptimizedFeatureConfigList: LiveStreamOptimizedFeatureConfigList;
}

