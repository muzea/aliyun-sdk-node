export interface ListEurekaInstancesResponse {
    /**
     * HTTP状态码。
     * @example `202`
     */
    HttpCode: string;
    /**
     * 实例总数。
     * @example `7`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `316F5F64-F73D-42DC-8632-01E308B6****`
     */
    RequestId: string;
    /**
     * 信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 每页展示实例数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 数据概览。
     */
    Data: {
        /**
         * 服务提供者数量，健康实例数/总实例数。
         * @example `1/1`
         */
        Status: string;
        /**
         * 实例属性最后更新的时间。
         * @example `20201009115543`
         */
        LastDirtyTimestamp: number;
        /**
         * IP地址。
         * @example `30.5.XX.XX`
         */
        IpAddr: string;
        /**
         * 主页地址。
         * @example `http://30.5.XX.XX:8091/`
         */
        HomePageUrl: string;
        /**
         * 主机名。
         * @example `30.5.XX.XX`
         */
        HostName: string;
        /**
         * 实例ID。
         * @example `L-PC1A6A28-****.hz.ali.com:contactinfo:8091`
         */
        InstanceId: string;
        /**
         * 服务端口。
         * @example `8091`
         */
        Port: number;
        /**
         * 安全端口。
         * @example `443`
         */
        SecurePort: number;
        /**
         * 应用名。
         * @example `CONTACTINFO`
         */
        App: string;
        /**
         * 实例超时时间。
         * 超过这个时间后，服务默认不可用，将会被删除。
         * @example `90`
         */
        DurationInSecs: number;
        /**
         * 最近一次心跳时间。
         * @example `20201010071203`
         */
        LastUpdatedTimestamp: number;
        /**
         * 心跳执行器在续约过程中超时后再次执行续约的最大延迟倍数。
         * 默认最大延迟倍数为10。
         * @example `10`
         */
        RenewalIntervalInSecs: number;
        /**
         * VIP地址。
         * @example `contactinfo`
         */
        VipAddress: string;
        /**
         * 元数据。
         * @example `[string]`
         */
        Metadata: any;
    }[];
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
}
