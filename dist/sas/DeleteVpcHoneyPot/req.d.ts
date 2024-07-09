export interface DeleteVpcHoneyPotRequest {
    /**
     * 指定要删除的蜜罐实例的VPC ID。
     * > 您可以调用[DescribeVpcHoneyPotList](~~DescribeVpcHoneyPotList~~)接口获取蜜罐实例的VPC ID。
     * @example `vpc-d7o009q63fqy21r8u****`
     */
    "VpcId": string;
}
