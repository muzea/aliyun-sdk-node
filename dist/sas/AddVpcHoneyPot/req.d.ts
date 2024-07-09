export interface AddVpcHoneyPotRequest {
    /**
     * 指定要创建云蜜罐的VPC ID。
     * > 您可以调用[DescribeVpcList](~~DescribeVpcList~~)接口通过返回参数InstanceId获取VPC ID。
     * @example `vpc-p0w5fgkfsl5a6791q****`
     */
    "VpcId": string;
}
