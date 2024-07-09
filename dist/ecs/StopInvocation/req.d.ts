export interface StopInvocationRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 命令执行ID。您可以通过接口[DescribeInvocations](~~64840~~)查询所有的InvokeId。
     * @example `t-7d2a745b412b4601b2d47f6a768d****`
     */
    "InvokeId": string;
    /**
     * 要停止执行命令的实例列表，最多能指定50台实例ID。N的取值范围为1~50。
     * @example `i-bp67acfmxazb4p****`
     */
    "InstanceId"?: string[];
}
