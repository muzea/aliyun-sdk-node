export interface SyncRecordingRulesRequest {
    /**
     * 被同步的集群ID。
     * @example `cc7a37ee31aea4ed1a059eff8034b****`
     */
    "ClusterId": string;
    /**
     * 批量的目标集群ID内容。
     * @example `{     "cn":[         "c06ca68cd16f14f52bb07772eda***",         "c33dd70a0ac184c1b879d807ab2***",         "c384cf7e4dcb543e6ac8c7d4dd3***"     ],     "us":[         "ce30f833bc4a04a56a06b070319***"     ],     "jp":[      ],     "ap":[      ],     "gov":[      ],     "finance":[      ] }`
     */
    "TargetClusters": string;
    /**
     * 地域ID。（可以和被同步集群所属的RegionId一致）
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
