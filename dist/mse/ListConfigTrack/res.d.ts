export interface ListConfigTrackResponse {
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
         * 记录时间。
         * @example `2022-11-28 15:09:15`
         */
        LogDate: string;
        /**
         * 监控指标值对应的时间戳。
         * 单位：秒。
         * @example `1659666529`
         */
        Ts: string;
        /**
         * 请求来源IP。
         * @example `192.168.1.2`
         */
        RequestIp: string;
        /**
         * 响应节点。
         * @example `mse-1973b9a0-1670834*****-reg-center-0-2`
         */
        ResponseIp: string;
        /**
         * 配置ID。
         * @example `eir-server.properties`
         */
        DataId: string;
        /**
         * 配置组。
         * @example `DEFAULT_GROUP`
         */
        Group: string;
        /**
         * 事件。
         * - 配置获取事件：pull
         * - 持久化事件：persist
         * @example `pull`
         */
        Event: string;
        /**
         * 结果。
         * @example `ok`
         */
        Result: string;
        /**
         * 延迟，单位为ms。
         * @example `0`
         */
        Delay: string;
        /**
         * 配置MD5值。
         * @example `d21c9091c60daa0ff7ee2f420141e5a0`
         */
        Md5: string;
        /**
         * 发布类型。
         * - beta发布：beta
         * - 灰度发布：tag
         * - 分批发布：batch
         * @example `beta`
         */
        Type: string;
        /**
         * 是否是服务端推送。
         * - true
         * - false
         * @example `false`
         */
        Push: boolean;
        /**
         * 是否是客户端的请求。
         * - true
         * - false
         * @example `false`
         */
        Client: boolean;
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
     * 数量。
     * @example `3`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `0CE3ABD2-1E04-561F-A9B4-0423D50****`
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
