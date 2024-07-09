export interface GetAuthorizationUrlRequest {
    /**
     * 手机号。
     * @example `1390000****`
     */
    "PhoneNo": string;
    /**
     * 授权场景ID。您可在**号码认证服务控制台**的**授权场景管理**页面查看授权场景ID。
     * @example `234****`
     */
    "SchemeId": number;
    /**
     * 授权结束日期，合约型方案不能为空，类型：yyyy-MM-dd。
     * @example `2020–12–28`
     */
    "EndDate"?: string;
}
