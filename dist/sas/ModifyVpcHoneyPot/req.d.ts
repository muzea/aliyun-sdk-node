export interface ModifyVpcHoneyPotRequest {
    /**
     * 要生效的云蜜罐实例的VPC ID。
     * > 您可以调用[DescribeVpcHoneyPotList](~~DescribeVpcHoneyPotList~~)接口获取VPC ID。
     * @example `vpc-d7o009q63fqy21r8u****`
     */
    "VpcId": string;
    /**
     * 指定暂停或开启云蜜罐实例。取值：
     * - **disable**：暂停
     * - **enable**：开启
     * @example `disable`
     */
    "HoneyPotAction": string;
}
