export interface DescribeCapRequest {
    /**
     * 遭受DDoS攻击的公网IP资产所在地域ID。
     * > 您可以调用[DescribeRegions](~~353250~~)查询所有地域ID。
     * @example `cn-hangzhou`
     */
    "DdosRegionId": string;
    /**
     * 遭受DDoS攻击的公网IP资产的实例类型。取值：
     * - **ecs**：表示云服务器ECS实例。
     * - **slb**：表示负载均衡SLB实例。
     * - **eip**：表示弹性公网IP实例。
     * @example `ecs`
     */
    "InstanceType": string;
    /**
     * 遭受DDoS攻击的公网IP资产的实例ID。
     * > 您可以调用[DescribeInstance](~~354191~~)查询当前阿里云账号拥有的ECS、SLB、EIP实例的ID。
     * @example `i-bp10bclrt56fblts****`
     */
    "InstanceId": string;
    /**
     * DDoS攻击事件的开始时间。使用时间戳表示，单位：毫秒。
     * > 您可以调用[DescribeDdosEventList](~~354236~~)查询公网IP资产上发生的所有DDoS攻击事件的开始时间。
     * @example `1637812279000`
     */
    "BegTime": number;
    /**
     * 遭受DDoS攻击的公网IP资产的IP地址。
     * @example `121.199.XX.XX`
     */
    "InternetIp"?: string;
}
