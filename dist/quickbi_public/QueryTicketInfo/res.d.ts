export interface QueryTicketInfoResponse {
    /**
     * 请求ID。
     * @example `D787E1A3-A93C-424A-B626-C2B05DF8D885`
     */
    RequestId: string;
    /**
     * 生成的票据详情。
     */
    Result: {
        /**
         * 票据。
         * @example `a27a9aec-****-****-bd40-1a21ea41d7c5`
         */
        AccessTicket: string;
        /**
         * 组织ID。
         * @example `2fe4fbd8-****-****-b3e1-e92c7af083ea`
         */
        OrganizationId: string;
        /**
         * Quick BI的用户ID。
         * @example `974e50**********9033f46`
         */
        UserId: string;
        /**
         * 已消费的票据数。
         * @example `47`
         */
        UsedTicketNum: number;
        /**
         * 最大支持的票据数。
         * @example `9999`
         */
        MaxTicketNum: number;
        /**
         * 票据的注册时间。
         * @example `2022-01-09 22:23:49`
         */
        RegisterTime: string;
        /**
         * 票据的失效时间。
         * @example `2022-01-30 03:03:49`
         */
        InvalidTime: string;
        /**
         * 报表ID。
         * @example `ccd3428c-****-****-a608-26bae29dffee`
         */
        WorksId: string;
        /**
         * 报表内的组件ID。
         * @example `sfdgsds-****-****-a608-mghdgd`
         */
        CmptId: string;
        /**
         * 全局参数。
         * @example `[{&quot;paramKey&quot;:&quot;price&quot;,&quot;joinType&quot;:&quot;and&quot;,&quot;conditionList&quot;:[{&quot;operate&quot;:&quot;&gt;&quot;,&quot;value&quot;:&quot;0&quot;}]},{&quot;paramKey&quot;:&quot;product_type&quot;,&quot;joinType&quot;:&quot;and&quot;,&quot;conditionList&quot;:[{&quot;operate&quot;:&quot;in&quot;,&quot;value&quot;:[&quot;办公用品&quot;,&quot;家具产品&quot;]}]}]\n`
         */
        GlobalParam: string;
        /**
         * 水印参数。
         * @example `Ticket三方嵌入`
         */
        WatermarkParam: string;
    };
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
}
