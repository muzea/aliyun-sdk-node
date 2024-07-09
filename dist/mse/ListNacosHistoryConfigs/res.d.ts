export interface ListNacosHistoryConfigsResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpCode: string;
    /**
     * 实例配置信息总数。
     * @example `7`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `53338ECA-F880-54D8-A9B3-5606355A1B89`
     */
    RequestId: string;
    /**
     * 返回信息。
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
    /**
     * 配置项列表。
     */
    HistoryItems: {
        /**
         * 应用标签。
         * @example `gateway`
         */
        AppName: string;
        /**
         * 数据ID。
         * @example `test.yaml`
         */
        DataId: string;
        /**
         * 分组名称。
         * @example `default`
         */
        Group: string;
        /**
         * 最后更新时间戳。
         * @example `1643440066000`
         */
        LastModifiedTime: number;
        /**
         * 配置ID。
         * @example `23fdsf`
         */
        Id: number;
        /**
         * 配置文本类型。
         * @example `yaml`
         */
        OpType: string;
        SrcUser: string;
    }[];
}
