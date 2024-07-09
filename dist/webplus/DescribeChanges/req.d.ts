export interface DescribeChangesRequest {
    /**
     * 环境ID，将查询此环境内所有变更信息
     * @example `we-5d245f7f1f773f090a0d****`
     */
    "EnvId"?: string;
    /**
     * 要查询的变更类型
     * @example `Termination`
     */
    "ActionName"?: string;
    /**
     * 查询页面内结果数量
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询页面数量
     * @example `1`
     */
    "PageNumber"?: number;
    "RegionId"?: string;
}
