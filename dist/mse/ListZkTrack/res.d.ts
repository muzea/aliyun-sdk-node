export interface ListZkTrackResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpCode: string;
    /**
     * 轨迹数据。
     */
    Traces: {
        /**
         * 记录时间。
         * @example `2022-11-28 15:09:15,606`
         */
        LogDate: string;
        /**
         * 时间戳（暂无）。
         * @example `1669619383000`
         */
        Timestamp: string;
        /**
         * SessionId。
         * @example `0x301fdfbdbf00***`
         */
        SessionId: string;
        /**
         * 路径。
         * @example `/path`
         */
        Path: string;
        /**
         * 轨迹类型：
         * - Push
         * - Pull
         * - Notify
         * @example `Push`
         */
        TraceType: string;
        /**
         * 操作类型。
         * 对于Push：
         *
         * - Create
         * - Update
         * - Delete
         * - SetAcl
         * - Multi
         * 对于Pull：
         * - GetData
         * - GetChild
         * - GetStat
         * @example `Create`
         */
        OpType: string;
        /**
         * 事件类型。
         * 对于notify：
         * - NodeCreated
         * - NodeDeleted
         * - NodeDataChanged
         * - NodeChildrenChanged
         * @example `NodeCreated`
         */
        EventType: string;
        /**
         * 数据类型：
         * - persist
         * - ephemeral
         * @example `persist`
         */
        DataType: string;
        /**
         * 是否监听。
         * @example `true`
         */
        Watch: boolean;
        /**
         * ACL。
         * @example `world:anyone:cdrwa`
         */
        Acl: string;
        /**
         * 事务大小。
         * @example `3`
         */
        MultiSize: number;
        /**
         * 结果。
         * @example `success`
         */
        Result: string;
        /**
         * TTL。
         * @example `0`
         */
        Ttl: number;
        /**
         * 业务是否结束。
         * @example `true`
         */
        Finished: boolean;
    }[];
    /**
     * 分页大小。
     * @example `20`
     */
    PageSize: number;
    /**
     * 当前页。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总数。
     * @example `20`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `DC34E4A3-5F1C-4E40-86EA-02EDF967****
    `
     */
    RequestId: string;
    /**
     * 信息。
     * @example `ok`
     */
    Message: string;
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * 请求结果，取值如下：
     * - true：请求成功。
     * - false：请求失败。
     * @example `true`
     */
    Success: boolean;
}
