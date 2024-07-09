export interface ListReleaseVersionsRequest {
    /**
     * serverless spark版本
     * @example `esr-2.1 (Spark 3.3.1, Scala 2.12, Java Runtime)`
     */
    "releaseVersion"?: string;
    /**
     * 版本状态
     * @example `ONLINE`
     */
    "releaseVersionStatus"?: string;
    /**
     * 版本类型
     * @example `stable`
     */
    "releaseType"?: string;
    /**
     * 区域ID。
     * @example `cn-hangzhou`
     */
    "regionId"?: string;
}
