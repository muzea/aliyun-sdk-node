export interface ListHoneypotAttackerSourceResponse {
    /**
     * 攻击源列表。
     */
    List: {
        /**
         * 攻击事件发生总数。
         * @example `30`
         */
        EventCount: number;
        /**
         * 攻击事件最新发生时间。
         * @example `1693446913000`
         */
        LastTime: number;
        /**
         * 最新一次攻击的目标蜜罐。
         * @example `vpc tcp 蜜罐`
         */
        LastTargetHoneypot: string;
        /**
         * 最新一次攻击的目标IP。
         * @example `144.23.66.***`
         */
        LastTargetIp: string;
        /**
         * 攻击源IP。
         * @example `101.102.61.***`
         */
        SrcIp: string;
        /**
         * 风险等级。取值：
         * - **2**：低风险等级。
         * - **3**：中风险等级。
         * - **4**：高风险等级。
         * @example `2`
         */
        RiskLevel: string;
    }[];
    /**
     * 查询结果的分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，显示的当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，显示的每页数据的最大条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 数据的总条数。
         * @example `55`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的数据条数。
         * @example `20`
         */
        Count: number;
    };
    /**
     * 接口调用是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 请求结果返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `9915DC4D-B4DA-5140-8138-FD80636*****`
     */
    RequestId: string;
    /**
     * 请求数据结果的HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
