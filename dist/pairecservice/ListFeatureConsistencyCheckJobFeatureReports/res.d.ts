export interface ListFeatureConsistencyCheckJobFeatureReportsResponse {
    /**
     * 请求ID。
     * @example `BBD41FBF-E75C-551A-92FA-CAD654AA006F`
     */
    RequestId: string;
    /**
     * 特征比对报表。
     */
    ReportsOfFeatureDiff: {
        /**
         * 用户ID。
         * @example `1010`
         */
        LogUserId: string;
        /**
         * 物品ID。
         * @example `9010`
         */
        LogItemId: string;
        /**
         * 请求ID。
         * @example `F7AC05FF-EDE7-5C2B-B9AE-33D6DF4178BA`
         */
        LogRequestId: string;
        /**
         * 特征名称。
         * @example `gender`
         */
        FeatureName: string;
        /**
         * 离线值。
         * @example `male`
         */
        OfflineValue: string;
        /**
         * 在线值。
         * @example `male`
         */
        OnlineValue: string;
    }[];
    /**
     * 数据路径。
     * @example `https://********`
     */
    DataPath: string;
    /**
     * OSS路径。
     * @example `oss://********`
     */
    OssPath: string;
}
