export interface DescribeVpcHoneyPotListResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `4FEC7F58-FCDA-415F-AE25-CD8BC0931DF2`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页最多显示的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 数据的总条数。
         * @example `2`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的数据条数。
         * @example `2`
         */
        Count: number;
    };
    /**
     * 云蜜罐实例的列表信息。
     */
    VpcHoneyPotDTOList: {
        /**
         * 云蜜罐实例的VPC名称。
         * @example `abc-vpcname`
         */
        VpcName: string;
        /**
         * 云蜜罐实例的VPC ID。
         * @example `vpc-p0w223apdl49sr5zv****`
         */
        VpcId: string;
        /**
         * 云蜜罐在VPC内创建的网卡实例ID。
         * @example `eni-p0whwgg7bing8b80****`
         */
        HoneyPotEniInstanceId: string;
        /**
         * VPC网段。
         * @example `192.168.XX.XX/16`
         */
        CidrBlock: string;
        /**
         * 当前VPC实例的状态。取值：
         * - **Available**：可用（正常运行状态）
         * - **Pending**：配置中
         * @example `Available`
         */
        VpcStatus: string;
        /**
         * 创建VPC实例的时间。单位为毫秒。
         * @example `1607365213000`
         */
        CreateTime: number;
        /**
         * 云蜜罐使用的网卡所在的交换机的ID。
         * @example `vsw-p0w7gdcfvn20tvdul****`
         */
        HoneyPotVpcSwitchId: string;
        /**
         * 当前VPC实例是否开通了云蜜罐。取值：
         * - **true**：已开通
         * - **false**：未开通
         * @example `true`
         */
        HoneyPotExistence: boolean;
        /**
         * 云蜜罐实例的VPC所在区域的ID。
         * > Region ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
         * @example `ap-southeast-2`
         */
        VpcRegionId: string;
        /**
         * 云蜜罐实例对应的服务器状态。取值：
         * - **Pending**：创建中
         * - **Running**：运行中
         * - **Starting**：启动中
         * - **Stopping**：停止中
         * - **Stopped**：已停止
         * @example `Running`
         */
        HoneyPotEcsInstanceStatus: string;
        /**
         * 云蜜罐实例状态。取值：
         * - **pending**：创建中
         * - **deleting**：删除中
         * - **off**：关闭
         * - **suspending**：暂停中
         * - **on**：已开启
         * @example `on`
         */
        HoneyPotInstanceStatus: string;
        /**
         * 当前VPC下的交换机列表信息。
         */
        VpcSwitchIdList: {
            /**
             * 交换机名称。
             * @example `abc01`
             */
            VpcSwitchName: string;
            /**
             * 交换机所在可用区ID。
             * @example `ap-southeast-2b`
             */
            ZoneId: string;
            /**
             * 交换机ID。
             * @example `vsw-p0wdnyv4wzp6jkuu4****`
             */
            VpcSwitchId: string;
        }[];
    }[];
}
