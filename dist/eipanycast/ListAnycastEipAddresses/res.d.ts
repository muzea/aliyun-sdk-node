export interface ListAnycastEipAddressesResponse {
    /**
     * 列表条目数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `4EC47282-1B74-4534-BD0E-403F3EE64CAF`
     */
    RequestId: string;
    /**
     * Anycast EIP信息列表。
     */
    AnycastList: {
        /**
         * IP状态。
         * - **Associating**：绑定中。
         * - **Unassociating**：解绑中。
         * - **Allocated**：已分配。
         * - **Associated**：已绑定。
         * - **Modifying**：修改中。
         * - **Releasing**：释放中。
         * - **Released**：已释放。
         * @example `Associating`
         */
        Status: string;
        /**
         * Anycast EIP实例创建时间。
         * @example `2022-04-22T01:37:38Z`
         */
        CreateTime: string;
        /**
         * Anycast EIP实例ID。
         * @example `aeip-2zeerraiwb7ujsxdc****`
         */
        AnycastId: string;
        /**
         * Anycast EIP实例账号ID。
         * @example `123440159596****`
         */
        AliUid: number;
        /**
         * Anycast EIP实例接入区域。
         * **international**：指中国内地以外的区域。
         * @example `international`
         */
        ServiceLocation: string;
        /**
         * Anycast EIP实例的付费模式。
         * **PostPaid**：指后付费模式。
         * @example `PostPaid`
         */
        InstanceChargeType: string;
        /**
         * Anycast EIP实例IP地址。
         * @example `139.95.XX.XX`
         */
        IpAddress: string;
        /**
         * Anycast EIP实例的带宽峰值。单位：Mbps。
         * @example `200`
         */
        Bandwidth: number;
        /**
         * Anycast EIP实例描述。
         * @example `docdesc`
         */
        Description: string;
        /**
         * Anycast EIP实例绑定信息列表。
         */
        AnycastEipBindInfoList: {
            /**
             * 绑定云资源实例类型。
             * - **SlbInstance**：指专有网络类型的私网传统型负载均衡CLB（Classic Load Balancer）实例（原SLB）。
             * - **NetworkInterface**：弹性网卡ENI（Elastic Network Interface）。
             * @example `SlbInstance`
             */
            BindInstanceType: string;
            /**
             * 绑定时间。
             * @example `2022-04-23T01:37:38Z`
             */
            BindTime: string;
            /**
             * 绑定云资源实例地域ID。
             * @example `us-west-1`
             */
            BindInstanceRegionId: string;
            /**
             * 绑定云资源实例ID。
             * @example `lb-2zebb08phyczzawe****`
             */
            BindInstanceId: string;
        }[];
        /**
         * Anycast EIP实例的计费方式。
         * **PayByTraffic**：指按流量计费方式。
         * @example `PayByTraffic`
         */
        InternetChargeType: string;
        /**
         * Anycast EIP实例的业务状态。
         * - **Normal**：正常状态。
         * - **FinancialLocked**：欠费锁定状态。
         * @example `Normal`
         */
        BusinessStatus: string;
        /**
         * Anycast EIP实例名称。
         * @example `docname`
         */
        Name: string;
        /**
         * 是否为服务账号创建的资源。
         * - **0**：非服务账号创建。
         * - **1**：服务账号创建。
         * @example `0`
         */
        ServiceManaged: number;
        /**
         * 实例所属的资源组ID。
         * @example `rg-aekzthsmwsnfuni
        `
         */
        ResourceGroupId: string;
        /**
         * 标签信息。
         */
        Tags: {
            /**
             * 标签键。
             * @example `FinanceDept`
             */
            Key: string;
            /**
             * 标签值。
             * @example `FinanceJoshua`
             */
            Value: string;
        }[];
    }[];
}
