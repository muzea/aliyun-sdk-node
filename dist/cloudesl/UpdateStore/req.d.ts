export interface UpdateStoreRequest {
    /**
     * 门店ID。
     * @example `s-dxsxx****`
     */
    "StoreId": string;
    /**
     * 商家自定义门店ID。
     * @example `123456`
     */
    "UserStoreCode"?: string;
    /**
     * 门店名称。
     * @example `天猫超市`
     */
    "StoreName"?: string;
    /**
     * 门店所在监督工商局的监督电话。
     * @example `0571-5666888`
     */
    "Phone"?: string;
    /**
     * 系统保留字段，请忽略；
     * @example `{}`
     */
    "ExtraParams"?: string;
    /**
     * 门店模板版本；
     * @example `1.1.0`
     */
    "TemplateVersion"?: string;
    /**
     * 时区。
     * @example `GMT+08:00`
     */
    "Timezone"?: string;
    /**
     * 条形码编码方式：0：Code128 ，1：EAN13（默认0）
     * @example `0`
     */
    "BarCodeEncode"?: number;
    /**
     * 是否自动解绑离线价签
     * @example `false`
     */
    "AutoUnbindOfflineEsl"?: boolean;
    /**
     * 自动解绑时间，单位：日
     * @example `1`
     */
    "AutoUnbindDays"?: number;
}
