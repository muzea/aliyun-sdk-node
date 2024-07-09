export interface DescribeBgpPackByIpRequest {
    /**
     * 要查询的公网IP资产所在地域ID。
     * > 您可以调用[DescribeRegions](~~353250~~)查询所有地域ID。
     * @example `cn-hangzhou`
     */
    "DdosRegionId": string;
    /**
     * 要查询的公网IP资产（ECS实例、SLB实例、EIP实例）的IP地址。
     * > 您可以调用[DescribeInstance](~~354191~~)查询当前阿里云账号拥有的ECS、SLB、EIP实例的ID。
     * @example `118.31.XX.XX`
     */
    "Ip": string;
}
