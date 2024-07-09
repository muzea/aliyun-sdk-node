export interface DescribeOnDemandInstanceStatusResponse {
    /**
     * 本次请求的ID。
     * @example `CC49FF51-612F-429B-AB1E-374B3F115396`
     */
    RequestId: string;
    /**
     * 代播实例的详细信息。
     */
    Instances: {
        /**
         * 阿里云账号ID。
         * @example `171986973287****`
         */
        UserId: string;
        /**
         * 代播防护的启动模式。取值：
         * - **manual**：表示手动启动。
         * - **netflow-auto**：表示通过NetFlow网络流量监测自动启动。
         * @example `netflow-auto`
         */
        Mode: string;
        /**
         * 代播实例的ID。
         * > 该参数仅在返回多个代播实例时才会返回。目前仅返回一个代播实例，该参数不会返回。
         * @example `ddosbgp-cn-z2q1qzxb****`
         */
        InstanceId: string;
        /**
         * 海外IDC的路由宣告状态信息。以JSON数组格式转化成字符串表示，JSON数组中的每个结构体包含以下参数：
         * - **region**：String类型 | 海外IDC代码。关于IDC代码对应的地域信息，请参见该表格下方的**海外IDC代码**说明。
         * - **declared**：String类型 | 该IDC是否宣告路由，取值：**0**（表示未宣告） | **1**（表示宣告）。
         * @example `[{\"region\":\"oe24\",\"declared\":0},{\"region\":\"oe26\",\"declared\":0},{\"region\":\"oe28\",\"declared\":0},{\"region\":\"oi39\",\"declared\":0},{\"region\":\"us50\",\"declared\":0},{\"region\":\"jp141\",\"declared\":0}]`
         */
        Declared: string;
        /**
         * 自治系统AS（Autonomous System）号码。目前取值固定为**0**，表示暂未启用。
         * @example `0`
         */
        RegistedAs: string;
        /**
         * 代播网段。
         * @example `47.***.***.0/24`
         */
        Net: string;
        /**
         * 代播实例的描述。
         * > 该参数仅在返回多个代播实例时才会返回。目前仅返回一个代播实例，该参数不会返回。
         * @example `test`
         */
        Desc: string;
    }[];
}
