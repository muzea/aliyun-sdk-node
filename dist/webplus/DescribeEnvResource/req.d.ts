export interface DescribeEnvResourceRequest {
    /**
     * 环境ID，将查询此环境内的所有资源
     * @example `we-5d22f93dcd04d705b65*****`
     */
    "EnvId": string;
    "RegionId"?: string;
}
