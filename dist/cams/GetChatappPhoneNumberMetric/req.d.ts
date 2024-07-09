export interface GetChatappPhoneNumberMetricRequest {
    /**
     * ISV校验码，用于校验子账号是否由ISV授权。
     * @example `skdi3kksloslikd****`
     */
    "IsvCode"?: string;
    /**
     * ISV子客户的SpaceId。
     * @example `29348393884****`
     */
    "CustSpaceId"?: string;
    /**
     * 指标粒度。
     * @example `DAILY`
     */
    "Granularity"?: string;
    /**
     * 查询开始时间。
     * @example `1693107714687`
     */
    "Start": number;
    /**
     * 查询结束时间。
     * @example `1693407714687`
     */
    "End": number;
    /**
     * 商业号码。
     * @example `861380000****`
     */
    "PhoneNumber"?: string;
}
