export interface CheckResultRequest {
    /**
     * 商户侧自定义的业务唯一标识，用于后续定位排查问题使用。支持字母和数字的组合，长度最长32位，请确保唯一。
     * @example `djs20d***9-dsskc`
     */
    "MerchantBizId"?: string;
    /**
     * 认证ID。
     * @example `4ab0b***cbde97`
     */
    "TransactionId"?: string;
    /**
     * 是否返回图片。
     * - Y：返回
     * - N：不返回
     * @example `N`
     */
    "IsReturnImage"?: string;
    /**
     * 返回附加信息。
     * @example `***`
     */
    "ExtraImageControlList"?: string;
    /**
     * 是否返回防伪检测结果。
     * @example `Y`
     */
    "ReturnFiveCategorySpoofResult"?: string;
}
