export interface ListMaliciousFileWhitelistConfigsResponse {
    /**
     * 无代理检测文件告警加白规则列表。
     */
    List: {
        /**
         * 创建时间。
         * @example `1691719662000`
         */
        GmtCreate: string;
        /**
         * 修改时间。
         * @example `1691719662000`
         */
        GmtModified: string;
        /**
         * 告警名称：
         * - ALL： 全部告警类型
         * @example `ALL`
         */
        EventName: string;
        /**
         * 加白的字段。
         * @example `fileMd5`
         */
        Field: string;
        /**
         * 加白的字段值。
         * @example `b2cf9747ee49d8d9b105cf16e078cc16`
         */
        FieldValue: string;
        /**
         * 规则判定操作符：
         * - strEqual：字符串相等
         * @example `strEqual`
         */
        Operator: string;
        /**
         * 目标生效范围：
         * - ALL：全部资产
         * - 其他：资产选择组件选中的资产范围Key
         * @example `ALL`
         */
        TargetValue: string;
        /**
         * 生效目标类型：
         * - ALL：全部资产
         * - SELECTION_KEY：通过资产选择组件选中的资产
         * @example `ALL`
         */
        TargetType: string;
        /**
         * 生效的资产数量。
         * >说明 targetType 为 SELECTION_KEY 的情况下，此字段有值
         * @example `ALL`
         */
        Count: string;
        /**
         * 业务来源：
         * - agentless：无代理检测
         * @example `agentless`
         */
        Source: string;
        /**
         * 告警加白规则编号。
         * @example `1`
         */
        Id: number;
    }[];
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页最多显示的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 数据的总条数。
         * @example `29`
         */
        TotalCount: number;
        /**
         * 当前页显示的数据条数。
         * @example `9`
         */
        Count: number;
    };
    /**
     * 接口调用是否成功。取值：
     * - **true**：接口调用成功。
     * - **false**：接口调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码。**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 附加信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F5CF78A7-30AA-59DB-847F-13EE3AE7****`
     */
    RequestId: string;
    /**
     * 请求数据结果的HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
