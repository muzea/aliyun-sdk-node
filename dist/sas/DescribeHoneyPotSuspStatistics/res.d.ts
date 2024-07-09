export interface DescribeHoneyPotSuspStatisticsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `9E3969FA-5ACC-4256-9FDE-BB6918CD0410`
     */
    RequestId: string;
    /**
     * 安全告警数排名前5的VPC或资产信息列表。
     */
    SuspHoneyPotStatisticsResponse: {
        /**
         * 查询的资产类型。取值：
         * - **vpcInstanceId**：VPC实例
         * - **uuid**：服务器
         * @example `vpcInstanceId`
         */
        Type: string;
        /**
         * VPC实例ID。
         * > 仅请求参数**StatisticsKeyType**指定为**vpcInstanceId**时，会返回该参数。
         * @example `vpc-p0wwdsuutdyu1ygkt****`
         */
        VpcId: string;
        /**
         * VPC实例名称。
         * > 仅请求参数**StatisticsKeyType**指定为**vpcInstanceId**时，会返回该参数。
         * @example `abc01`
         */
        VpcName: string;
        /**
         * 服务器名称。
         * > 仅请求参数**StatisticsKeyType**指定为**uuid**时，会返回该参数。
         * @example `abc-launch-advisor`
         */
        InstanceName: string;
        /**
         * 服务器实例ID。
         * > 仅请求参数**StatisticsKeyType**指定为**uuid**时，会返回该参数。
         * @example `i-p0whhoba24wd28p8****`
         */
        InstanceId: string;
        /**
         * 当前资产上发生的安全告警总数。
         * @example `8793`
         */
        Count: number;
    }[];
}
