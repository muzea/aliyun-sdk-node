export interface DescribeLiveStreamOptimizedFeatureConfigResponse {
    RequestId: string;
    LiveStreamOptimizedFeatureConfigList: {
        LiveStreamOptimizedFeatureConfig: {
            ConfigName: string;
            ConfigStatus: string;
            DomainName: string;
            ConfigValue: string;
        }[];
    };
}
