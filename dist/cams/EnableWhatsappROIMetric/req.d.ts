export interface EnableWhatsappROIMetricRequest {
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
}
