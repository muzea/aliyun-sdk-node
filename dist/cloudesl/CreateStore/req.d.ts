export interface CreateStoreRequest {
    /**
     * 父门店ID
     * @example `s-dxsxx****`
     */
    "ParentId"?: string;
    /**
     * 商家自定义门店ID
     * @example `20200201`
     */
    "UserStoreCode"?: string;
    /**
     * 门店名称
     * @example `天猫旗舰店`
     */
    "StoreName": string;
    /**
     * 门店联系电话
     * @example `0571-5666888`
     */
    "Phone": string;
    /**
     * 客户端token
     * @example `1212`
     */
    "ClientToken"?: string;
    /**
     * 系统保留字段，请忽略
     * @example `{}`
     */
    "ExtraParams"?: string;
    /**
     * 时区
     * @example `GMT+08:00`
     */
    "TimeZone"?: string;
    /**
     * 条形码编码方式：0：Code128 ，1：EAN13（默认0）
     * @example `0`
     */
    "BarCodeEncode"?: number;
    /**
     * 是否启用自动解绑离线价签
     * @example `false`
     */
    "AutoUnbindOfflineEsl"?: boolean;
    /**
     * 自动解绑离线价签条件-价签离线天数
     * @example `30`
     */
    "AutoUnbindDays"?: number;
}
