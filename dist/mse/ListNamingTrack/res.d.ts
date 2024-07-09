export interface ListNamingTrackResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpCode: string;
    /**
     * 信息列表。
     */
    Traces: {
        /**
         * 推送时间。
         * @example `2022-12-16 11:48:07`
         */
        PushTime: string;
        /**
         * 节点名称。
         * @example `mse-197*****-167083******-reg-center-0-0`
         */
        NodeName: string;
        /**
         * 客户端IP。
         * @example `120.40.32.235`
         */
        ClientIp: string;
        /**
         * 服务名称。
         * @example `fpx-xms-baseinfo`
         */
        ServerName: string;
        /**
         * 分组。
         * @example `prod`
         */
        Group: string;
        /**
         * 实例个数。
         * @example `1`
         */
        InstanceSize: string;
        /**
         * 总推送耗时。
         * @example `628ms`
         */
        PushTimeAll: string;
        /**
         * 推送网络耗时。
         * @example `37ms`
         */
        PushTimeNetwork: string;
        /**
         * SLA时间。
         * @example `628ms`
         */
        SlaTime: string;
    }[];
    /**
     * 当前页的大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总记录条数。
     * @example `7`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `9916CBED-B2D5-5685-9129-4592FE1*****`
     */
    RequestId: string;
    /**
     * 信息。
     * @example `请求处理成功`
     */
    Message: string;
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
