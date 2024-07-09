export interface ConfigNetworkRegionBlockRequest {
    /**
     * DDoS高防实例的ID。
     * > 您可以调用[DescribeInstanceIds](~~157459~~)查询所有DDoS高防实例的ID信息。
     * @example `ddoscoo-cn-mp91j1ao****`
     */
    "InstanceId": string;
    /**
     * 区域封禁的配置信息，使用JSON格式的字符串表述，具体结构如下。
     * - **RegionBlockSwitch**：String类型，必选，区域封禁的开关状态。取值：
     *     - **on**：开启
     *     - **off**：关闭
     * - **Countries**：Array类型，可选，要封禁的国际地域代码列表。
     *     > 关于国际地域代码的详细信息，请参见[地域类型参数取值说明](~~167926~~)。
     * 。
     * - **Provinces**：Array类型，可选，要封禁的中国地域代码列表。
     *     > 关于中国地域代码的详细信息，请参见[地域类型参数取值说明](~~167926~~)。
     *     例如，`[11,12]`表示北京市和天津市。
     * @example `{"RegionBlockSwitch":"on","Countries":[],"Provinces":[11,12,13,14,15,21,22,23,31,32,33,34,35,36,37,41,42,43,44,45,46,50,51,52,53,54,61,62,63,64,65,71,81,82]}`
     */
    "Config": string;
}
