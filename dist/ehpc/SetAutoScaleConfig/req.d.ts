interface SetAutoScaleConfigRequest {
    "RegionId": string;
    "ClusterId": string;
    "MaxNodesInCluster": number;
    "EnableAutoGrow"?: boolean;
    "EnableAutoShrink"?: boolean;
    "GrowIntervalInMinutes"?: number;
    "ShrinkIntervalInMinutes"?: number;
    "ShrinkIdleTimes"?: number;
    "GrowTimeoutInMinutes"?: number;
    "ExtraNodesGrowRatio"?: number;
    "GrowRatio"?: number;
    "ExcludeNodes"?: string;
    "SpotStrategy"?: string;
    "SpotPriceLimit"?: number;
    "Queues"?: string[];
}
export { SetAutoScaleConfigRequest };