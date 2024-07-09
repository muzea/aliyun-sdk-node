export interface ModifyElasticBizQpsRequest {
    /**
     * DDoS高防实例的ID。
     * > 您可以调用[DescribeInstanceIds](~~157459~~)查询所有DDoS高防实例的ID信息。
     * @example `ddoscoo-cn-mp91j1ao****`
     */
    "InstanceId": string;
    /**
     * 弹性QPS的计费模式。取值：
     * - **month**：月95模式
     * - **day**：日95模式
     * @example `month`
     */
    "Mode": string;
    /**
     * 弹性QPS值。
     * > 中国内地开启默认300000QPS，非中国内地开启默认150000QPS。
     * @example `300000`
     */
    "OpsElasticQps"?: number;
}
