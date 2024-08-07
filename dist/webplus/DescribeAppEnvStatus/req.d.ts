export interface DescribeAppEnvStatusRequest {
    /**
     * 环境ID，将查询此环境的状态
     * @example `we-5d244085f314934e2ab1****`
     */
    "EnvId": string;
    "RegionId"?: string;
}
