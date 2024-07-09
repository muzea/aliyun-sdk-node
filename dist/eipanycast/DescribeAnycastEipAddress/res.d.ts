export interface DescribeAnycastEipAddressResponse {
    /**
     * IP状态。
     * - **Associating**：绑定中。
     * - **Unassociating**：解绑中。
     * - **Allocated**：已分配。
     * - **Associated**：已绑定。
     * - **Modifying**：修改中。
     * - **Releasing**：释放中。
     * - **Released**：已释放。
     * @example `Associated`
     */
    Status: string;
    /**
     * Anycast EIP实例描述。
     * @example `doctest`
     */
    Description: string;
    /**
     * 请求ID。
     * @example `4EC47282-1B74-4534-BD0E-403F3EE64CAF`
     */
    RequestId: string;
    /**
     * Anycast EIP实例的付费模式。
     * 取值：**PostPaid**，表示后付费模式。
     * @example `PostPaid`
     */
    InstanceChargeType: string;
    /**
     * Anycast EIP实例创建时间。
     * 时间按照ISO8601标准表示，并使用UTC时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
     * @example `2021-04-23T01:37:38Z`
     */
    CreateTime: string;
    /**
     * Anycast EIP实例绑定云资源信息列表。
     */
    AnycastEipBindInfoList: {
        /**
         * 绑定的云资源实例类型。取值：
         * - **SlbInstance**：专有网络类型的CLB实例。
         * - **NetworkInterface**：弹性网卡。
         * @example `SlbInstance`
         */
        BindInstanceType: string;
        /**
         * 绑定时间。
         * 时间按照ISO8601标准表示，并使用UTC时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
         * @example `2021-04-23T02:37:38Z`
         */
        BindTime: string;
        /**
         * 绑定的云资源实例的状态。取值：
         * - **BINDING**：绑定中。
         * - **BINDED**：已绑定。
         * - **UNBINDING**：解绑中。
         * - **DELETED**：已删除。
         * - **MODIFYING**：修改中。
         * @example `BINDING`
         */
        Status: string;
        /**
         * 绑定的云资源实例的地域ID。
         * @example `us-west-1`
         */
        BindInstanceRegionId: string;
        /**
         * 绑定的云资源实例ID。
         * @example `lb-2zebb08phyczzawe****`
         */
        BindInstanceId: string;
        /**
         * 绑定云资源实例时，关联的接入区域的接入点信息。
         * 如果您是第一次绑定，系统将返回所有接入区域的接入点信息。
         */
        PopLocations: {
            /**
             * 绑定云资源实例时，关联的接入区域的接入点信息。
             * 如果您是第一次绑定，系统将返回所有接入区域的接入点信息。
             * @example `us-west-1-pop`
             */
            PopLocation: string;
        }[];
        /**
         * 绑定模式，取值：
         * - **Default**：默认模式，绑定的云资源实例为默认源站。
         * - **Normal**：普通模式，绑定的云资源实例为普通源站。
         * @example `Default`
         */
        AssociationMode: string;
        /**
         * 绑定的弹性网卡的辅助私网IP。
         * 只有当**BindInstanceType**取值为**NetworkInterface**时，返回该参数。
         * @example `192.168.XX.XX`
         */
        PrivateIpAddress: string;
    }[];
    /**
     * Anycast EIP实例的业务状态。取值：
     * - **Normal**：正常状态。
     * - **FinancialLocked**：欠费锁定状态。
     * @example `Normal`
     */
    BusinessStatus: string;
    /**
     * Anycast EIP实例的计费方式。
     * 取值：**PayByTraffic**，表示按流量计费方式。
     * @example `PayByTraffic`
     */
    InternetChargeType: string;
    /**
     * Anycast EIP实例名称。
     * @example `docname`
     */
    Name: string;
    /**
     * Anycast EIP实例ID。
     * @example `aeip-bp1ix34fralt4ykf3****`
     */
    AnycastId: string;
    /**
     * Anycast EIP实例接入区域。
     * 取值：**international**，表示中国内地以外的区域。
     * @example `international`
     */
    ServiceLocation: string;
    /**
     * Anycast EIP实例的带宽峰值，单位：Mbps。
     * @example `200`
     */
    Bandwidth: number;
    /**
     * Anycast EIP实例IP地址。
     * @example `139.95.XX.XX`
     */
    IpAddress: string;
    /**
     * Anycast EIP实例账号BID。
     * @example `26842`
     */
    Bid: string;
    /**
     * Anycast EIP实例账号ID。
     * @example `25346073170691****`
     */
    AliUid: number;
    /**
     * 实例所属的资源组ID。
     * @example `rg-acfmzssisocarfy`
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
}
