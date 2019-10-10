interface DescribeAppEnvInstanceHealthRequest {
    "RegionId"?: string;
    /**
    * 环境ID，将查询此环境内所有实例的健康状态
    * @example `we-5d244085f314934e2ab*****`
    */ "EnvId": string;
}
export { DescribeAppEnvInstanceHealthRequest };