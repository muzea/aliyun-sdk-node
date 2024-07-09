export interface AddAutoCcWhitelistRequest {
    /**
     * 要添加白名单IP的DDoS高防实例的ID。
     * > 您可以调用[DescribeInstanceIds](~~157459~~)查询所有DDoS高防实例的ID。
     * @example `ddoscoo-cn-mp91j1ao****`
     */
    "InstanceId": string;
    /**
     * 要添加的白名单IP的配置。使用JSON数组转化的字符串表示。JSON数组的每个元素是一个白名单IP结构体，具体包含以下参数：
     * - **src**：String类型 | 必选 | 要添加到白名单的IP地址。
     * @example `[{"src":"192.XX.XX.1"},{"src":"192.XX.XX.2"}]`
     */
    "Whitelist": string;
    /**
     * 该参数已废弃。
     * > 该参数表示黑名单IP的有效期。白名单IP默认永久有效，无需设置该参数。
     * @example `0`
     */
    "ExpireTime"?: number;
}
