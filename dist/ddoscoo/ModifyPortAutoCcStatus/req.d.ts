export interface ModifyPortAutoCcStatusRequest {
    /**
     * DDoS高防实例的ID。
     * > 您可以调用[DescribeInstanceIds](~~157459~~)查询所有DDoS高防实例的ID信息。
     * @example `ddoscoo-cn-mp91j1ao****`
     */
    "InstanceId": string;
    /**
     * 非网站业务AI智能防护的开关状态。取值：
     * - **on**：开启
     * - **off**：关闭
     * @example `on`
     */
    "Switch": string;
    /**
     * 非网站业务AI智能防护的模式。取值：
     * - **normal**：正常
     * - **loose**：宽松
     * - **strict**：严格
     * @example `normal`
     */
    "Mode": string;
}
