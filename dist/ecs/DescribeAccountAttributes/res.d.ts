export interface DescribeAccountAttributesResponse {
    /**
     * 请求ID。
     * @example `8CE45CD5-31FB-47C2-959D-CA8144CE****`
     */
    RequestId: string;
    AccountAttributeItems: {
        /**
         * 指定地域下账号特权AccountAttributeItem的信息集合。
         */
        AccountAttributeItem: {
            /**
             * 资源在指定地域下的使用配额分类。可能值：
             * - instance-network-type：可选择的网络类型。
             * - max-security-groups：安全组数量。
             * - max-elastic-network-interfaces：弹性网卡的数量。
             * - max-postpaid-instance-vcpu-count：按量付费实例的vCPU核数上限。
             * - max-spot-instance-vcpu-count：抢占式实例vCPU核数上限。
             * - used-postpaid-instance-vcpu-count：已使用按量付费实例的vCPU核数。
             * - used-spot-instance-vcpu-count：已使用抢占式实例vCPU核数。
             * - max-postpaid-yundisk-capacity：用作数据盘的按量付费云盘的总容量上限。
             * - used-postpaid-yundisk-capacity：已使用的用作数据盘的按量付费云盘容量。
             * - max-dedicated-hosts：专用宿主机数量。
             * - supported-postpaid-instance-types：按量付费I/O优化实例规格。
             * - max-axt-command-count：云助手命令的数量。
             * - max-axt-invocation-daily：每天可以执行的云助手命令次数。
             * - real-name-authentication：账号是否完成了实名认证。
             * - max-cloud-assistant-activation-count：可创建的云助手托管实例激活码数量上限。
             * @example `max-security-groups`
             */
            AttributeName: string;
            AttributeValues: {
                /**
                 * 资源的使用配额具体数值。
                 */
                ValueItem: {
                    /**
                     * 数据盘的云盘种类。可能值：
                     * -   cloud_efficiency：高效云盘。
                     * -   cloud_ssd：SSD云盘。
                     * -   cloud_essd：ESSD云盘。
                     * @example `cloud_ssd`
                     */
                    DiskCategory: string;
                    /**
                     * 当前地域下某类资源的使用配额具体数值。可能值：
                     * 以下分类返回值为0或正整数：
                     * - max-security-groups
                     * - max-elastic-network-interfaces
                     * - max-postpaid-instance-vcpu-count
                     * - max-spot-instance-vcpu-count
                     * - used-postpaid-instance-vcpu-count
                     * - used-spot-instance-vcpu-count
                     * - max-postpaid-yundisk-capacity
                     * - used-postpaid-yundisk-capacity
                     * - max-dedicated-hosts
                     * - max-axt-command-count
                     * - max-axt-invocation-daily
                     * - max-cloud-assistant-activation-count
                     * 分类为supported-postpay-instance-types时返回值：实例规格取值。参见[实例规格族](~~25378~~)。
                     * 分类为real-name-authentications时返回值：
                     * - yes
                     * - none
                     * - unnecessary
                     * 分类为instance-network-type时返回值：
                     * - vpc
                     * - classic
                     * @example `800`
                     */
                    Value: string;
                    /**
                     * 特权到期时间，仅存在到期时间的账号特权会返回该参数。按照[ISO 8601](~~25696~~)标准表示，并使用UTC +0时间。格式为yyyy-MM-ddTHH:mm:ssZ。
                     * @example `2019-01-01T12:30:00Z`
                     */
                    ExpiredTime: string;
                    /**
                     * 可用区ID。
                     * @example `cn-hangzhou-b`
                     */
                    ZoneId: string;
                    /**
                     * 实例规格。
                     * @example `ecs.g5.large`
                     */
                    InstanceType: string;
                    /**
                     * 特权属性类型的数量。
                     * @example `3`
                     */
                    Count: number;
                    /**
                     * 实例计费方式。
                     * @example `PrePaid`
                     */
                    InstanceChargeType: string;
                }[];
            };
        }[];
    };
}
