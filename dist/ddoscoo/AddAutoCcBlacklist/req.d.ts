export interface AddAutoCcBlacklistRequest {
    /**
     * DDoS高防实例的ID。
     * > 您可以调用**DescribeInstanceIds**查询所有DDoS高防实例的ID信息。
     * @example `ddoscoo-cn-mp91j1ao****`
     */
    "InstanceId": string;
    /**
     * 黑名单IP的详细信息，使用JSON格式的字符串表述，具体结构如下。
     * - **src**：String类型，必选，黑名单IP。
     * > 黑名单中最多支持手动添加2000个IP。多个IP地址间使用空格或换行方式分割。
     * @example `[{"src":"198.51.XX.XX"},{"src":"198.52.XX.XX"}]`
     */
    "Blacklist": string;
    /**
     * 过期时间，可自定义。取值范围：**300**~**604800**，单位：秒。
     * @example `300`
     */
    "ExpireTime": number;
}
