export interface DescribeInstanceInfoResponse {
    /**
     * 本次请求的ID。
     * @example `D7861F61-5B61-46CE-A47C-6B19160D5EB0`
     */
    RequestId: string;
    /**
     * WAF实例的详情。
     */
    InstanceInfo: {
        /**
         * WAF实例是否过期。取值：
         * - **0**：表示已过期。
         * - **1**：表示未过期。
         * > **PayType**为**0**（表示未开通WAF实例）时，不返回该参数。
         * @example `1`
         */
        Status: number;
        /**
         * WAF实例的到期时间。使用时间戳表示，单位：秒。
         * > **PayType**为**0**（表示未开通WAF实例）时，不返回该参数。
         * @example `1512921600`
         */
        EndDate: number;
        /**
         * WAF实例的版本。取值：
         * <props="china">- **version_3**：表示中国内地高级版。</props>
         * <props="china">- **version_4**：表示中国内地企业版。</props>
         * <props="china">- **version_5**：表示中国内地旗舰版。</props>
         * <props="china">- **version_exclusive_cluster**：表示中国内地虚拟独享集群版。</props>
         * <props="china">- **version_hybrid_cloud_standard**：表示中国内地混合云WAF版。</props>
         * <props="china">-  **version_pro_asia**：表示非中国内地高级版。</props>
         * <props="china">- **version_business_asia**：表示非中国内地企业版。</props>
         * <props="china">- **version_enterprise_asia**：表示非中国内地旗舰版。</props>
         * <props="china">- **version_exclusive_cluster_asia**：表示非中国内地虚拟独享集群版。</props>
         * <props="china">- **version_hybrid_cloud_standard_asia**：表示非中国内地混合云WAF版。</props>
         * <props="china">- **version_elastic_bill**：表示按量计费版。</props>
         * <props="china">- **version_elastic_bill_new**：表示按量计费2.0版。</props>
         * <props="china">如果返回的version参数值不在上述列表中，请确认您使用的是阿里云中国站云账号。</props>
         * <props="intl">- **version_pro_china**：表示中国内地高级版。</props>
         * <props="intl">- **version_business_china**：表示中国内地企业版。</props>
         * <props="intl">- **version_enterprise_china**：表示中国内地旗舰版。</props>
         * <props="intl">- **version_exclusive_china**：表示中国内地虚拟独享集群版。</props>
         * <props="intl">- **version_hybrid_cloud_standard_china**：表示中国内地混合云WAF版。</props>
         * <props="intl">- **version_pro**：表示非中国内地高级版。</props>
         * <props="intl">- **version_business**：表示非中国内地企业版。</props>
         * <props="intl">- **version_enterprise**：表示非中国内地旗舰版。</props>
         * <props="intl">- **version_exclusive**：表示非中国内地虚拟独享集群版。</props>
         * <props="intl">- **version_hybrid_cloud_standard**：表示非中国内地混合云WAF版。</props>
         * <props="intl">如果返回的version参数值不在上述列表中，请确认您使用的是阿里云国际站云账号。</props>
         * > **PayType**为**0**（表示未开通WAF实例）时，不返回该参数。
         * @example `version_3`
         */
        Version: string;
        /**
         * 试用版WAF实例的剩余可用天数。
         * > 只有当**Trial**为**1**（表示已开通试用版WAF实例）时，才返回该参数。
         * @example `1`
         */
        RemainDay: number;
        /**
         * WAF实例的地域。取值：
         * - **cn**：表示中国内地。
         * - **cn-hongkong**：表示非中国内地。
         * > **PayType**为**0**（表示未开通WAF实例）时，不返回该参数。
         * @example `cn`
         */
        Region: string;
        /**
         * WAF实例的开通状态。取值：
         * - **0**：表示当前阿里云账号未开通WAF实例。
         * - **1**：表示当前阿里云账号已开通WAF包年包月实例。
         * <props="china">- **2**：表示当前阿里云账号已开通WAF按量计费实例。</props>
         * @example `1`
         */
        PayType: number;
        /**
         * WAF实例是否存在欠费。取值：
         * - **0**：表示已欠费。
         * - **1**：表示未欠费。
         * > **PayType**为**0**（表示未开通WAF实例）时，不返回该参数。
         * @example `1`
         */
        InDebt: number;
        /**
         * WAF实例的ID。
         * > **PayType**为**0**（表示未开通WAF实例）时，不返回该参数。
         * @example `waf-cn-tl32ast****`
         */
        InstanceId: string;
        /**
         * <props="china">WAF实例的计费方式。取值：</props>
         * <props="china">- **Subscription**：表示包年包月。</props>
         * <props="china">- **PayAsYouGo**：表示按量计费。</props>
         * <props="intl">WAF实例的计费方式。取值固定为**Subscription**，表示包年包月。</props>
         * > **PayType**为**0**（表示未开通WAF实例）时，不返回该参数。
         * @example `Subscription`
         */
        SubscriptionType: string;
        /**
         * 当前阿里云账号是否开通了试用版WAF实例。取值：
         * - **0**：表示否。
         * - **1**：表示是。
         * > 只有当前阿里云账号已开通试用版WAF实例时，才会返回该参数。
         * @example `1`
         */
        Trial: number;
    };
}
