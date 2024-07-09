export interface UpdateMsConfigAttributesResponse {
    /**
     * 结果描述
     * @example `OK`
     */
    ResultMessage: string;
    /**
     * 结果码，取值为： OK、INTERNALERROR、ERRPERMISSIONDENIED、ERRNOTENABLED、INVALIDSIGNATURE、ERRORREQUEST、ACCESSDENIED、MISSINGPARAMETER、ERRORINTERNALPROVIDER、BADPROVIDER_RESPONSE。
     * @example `OK`
     */
    ResultCode: string;
    /**
     * 请求ID
     * @example `861E6630-AEC0-4B2D-B214-6CB5E44B7F04`
     */
    RequestId: string;
}
