export interface ListAnsServicesResponse {
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
     * @example `52BA6DA6-A702-4362-A32F-DFF79655****`
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
         * 健康心跳的服务实例总数。
         * @example `1`
         */
        HealthyInstanceCount: number;
        /**
         * 联系人组名称。
         * @example `name`
         */
        GroupName: string;
        /**
         * 当前服务的实例总数。
         * @example `1`
         */
        IpCount: number;
        /**
         * 服务名称。
         * @example `name`
         */
        Name: string;
        /**
         * 集群总数。
         * @example `1`
         */
        ClusterCount: number;
        /**
         * 服务类型，取值如下：
         * * console：控制台注册。
         * * sdk：SDK注册。
         * * governance：服务治理注册。
         * @example `console`
         */
        Source: string;
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
