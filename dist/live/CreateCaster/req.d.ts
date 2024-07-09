export interface CreateCasterRequest {
    /**
     * 导播台名称。
     * @example `liveCaster****`
     */
    "CasterName"?: string;
    /**
     * 用户生成的请求token。用于保证请求的幂等性。
     * 该参数值可自定义，但是要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `53200b81-b761-4c10-842a-a0726d97****`
     */
    "ClientToken": string;
    /**
     * 导播台规格类型。取值：
     * <props="china">
     * - **1**：通用型。
     * - **3**：轻量级轮播型。
     * - **4**：虚拟演播厅型。
     * - **6**：轮播台（新播单型导播台）。
     * </props>
     * <props="intl">
     * - **1**：通用型。
     * - **6**：轮播台（新播单型导播台）。
     * </props>
     * @example `1`
     */
    "NormType": number;
    /**
     * 付费方式。 目前只支持**PostPaid**。取值：
     * - **PrePaid**：预付费（暂不支持）。
     * - **PostPaid**：后付费。
     * @example `PostPaid`
     */
    "ChargeType": string;
    /**
     * 导播台购买时间。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * > 当**ChargeType**为**PrePaid**时，此参数才可设置。
     * @example `2017-08-20T12:10:10Z`
     */
    "PurchaseTime"?: string;
    /**
     * 导播台过期时间。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * > 当**ChargeType**为**PrePaid**时，此参数才可设置。
     * @example `2017-08-22T12:10:10Z`
     */
    "ExpireTime"?: string;
    /**
     * 导播台预设分辨率。采用预付费方式时，取值：
     * - **lp_ld**：流畅。
     * - **lp_sd**：标清。
     * - **lp_hd**：高清。
     * - **lp_ud**：超清。
     * - **lp_ld_v**：竖屏流畅。
     * - **lp_sd_v**：竖屏标清。
     * -  **lp_hd_v**：竖屏高清。
     * - **lp_ud_v**：竖屏超清。
     * >后付费场景下，需要设置分辨率，请调用[SetCasterConfig](~~60271~~)接口进行操作。
     * @example `lp_sd`
     */
    "CasterTemplate"?: string;
}
