export interface QueryGroupedSecurityEventMarkMissListResponse {
    /**
     * 加白规则集合。
     */
    List: {
        /**
         * 用户ID。
         * @example `31412647`
         */
        AliUid: number;
        /**
         * 告警事件类型（子类型）。
         * @example `Unusual Logon`
         */
        EventType: string;
        /**
         * 告警事件类型（父类型）。
         * @example `异常登录`
         */
        EventTypeOriginal: string;
        /**
         * 告警事件名称（子类型）。
         * @example `Login with unusual location`
         */
        EventName: string;
        /**
         * 告警事件名称（父类型）。
         * @example `login_common_location`
         */
        EventNameOriginal: string;
        /**
         * 资产ID。多个资产用半角逗号（,）隔开。
         * @example `6985b88c-eb19-4d27-98ad-e4a42312****,5721d503-9b04-4243-89ca-1fb8ca5e****,db2678c3-10e3-4a20-92f1-265f6****`
         */
        Uuids: string;
        /**
         * 加白字段。
         * @example `type`
         */
        Field: string;
        /**
         * 加白字段别名。
         * @example `Logon Time`
         */
        FiledAliasName: string;
        /**
         * 加白值。
         * @example `root`
         */
        FieldValue: string;
        /**
         * 操作符。取值：
         * - **contains**：包含
         * - **notContains**：不包含
         * - **strEqual**：等于
         * - **strNotEqual**：不等于
         * - **regex**：正则
         * @example `contains`
         */
        Operate: string;
        /**
         * 处置方式。取值：
         * - **auto\_add_white**：自动加白
         * - **defense\_not_notification**：仅防御不通知
         * @example `auto_add_white`
         */
        DisposalWay: string;
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
         * 分页查询时，每页显示的白名单规则的数量。默认值为**20**，表示每页显示20条白名单规则。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到加白规则总条数。
         * @example `69`
         */
        TotalCount: number;
        /**
         * 当前页加白规则条数。
         * @example `9`
         */
        Count: number;
    };
    /**
     * 返回的查询结果的状态。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码。**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 错误码的详细信息。
     * @example `There was an error with your request.`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `965F9282-D403-4FA2-B1B9-10F62DC719BF`
     */
    RequestId: string;
}
