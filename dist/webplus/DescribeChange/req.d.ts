export interface DescribeChangeRequest {
    /**
     * 环境ID，将查询此环境内所有变更信息
     * @example `we-5d245f7f1f773f090a0d****`
     */
    "EnvId"?: string;
    /**
     * 变更ID，将查询此变更ID
     * @example `wc-5d245f94f314934e2ab1****`
     */
    "ChangeId"?: string;
    "RegionId"?: string;
}
