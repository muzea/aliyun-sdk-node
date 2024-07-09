export interface QueryAllSwimmingLaneGroupResponse {
    /**
     * 请求id。
     * @example `54973C90-F379-4372-9AA5-053A3F7****`
     */
    RequestId: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * code仅仅用来和success同步。
     * @example `200`
     */
    Code: number;
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * http状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * - 当请求成功时，返回成功信息。
     * - 当请求失败时，返回失败原因。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 动态错误信息中的占位符。
     * @example `The specified parameter is invalid.`
     */
    DynamicMessage: string;
    /**
     * 数据概览。
     * @example `[{id:100,name:"test"}]
    `
     */
    Data: {
        /**
         * 泳道组名称。
         * @example `swimmingGroup`
         */
        Name: string;
        /**
         * 泳道所属的用户ID。
         * @example `12345`
         */
        UserId: string;
        /**
         * 在哪一侧开启消息灰度。
         * @example `Client`
         */
        MessageQueueFilterSide: string;
        /**
         * 应用Id列表。
         * @example `abcde@abcde,abcde@abcde`
         */
        AppIds: string;
        /**
         * 泳道所属的MSE命名空间。
         * @example `default`
         */
        Namespace: string;
        /**
         * 是否记录请求详情（全链路灰度可观测）。
         * @example `false`
         */
        RecordCanaryDetail: boolean;
        /**
         * 泳道组ID。
         * @example `123`
         */
        Id: number;
        /**
         * 入口应用类型和入口应用ID。
         * @example `mse:abcde@abcde`
         */
        EntryApp: string;
        /**
         * 所属地域。
         * @example `cn-hangzhou`
         */
        Region: string;
        /**
         * 是否开启消息灰度。
         * @example `true`
         */
        MessageQueueGrayEnable: boolean;
        Paths: string;
        paths: string;
        CanaryModel: number;
        canaryModel: number;
    }[];
}
