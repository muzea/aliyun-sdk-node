export interface GetNamespaceDataRequest {
    /**
     * 项目ID。
     * @example `PIY3UB0T`
     */
    "ProjectId": string;
    /**
     * Namespace唯一标识。
     * @example `cc6c29893f2be7d465db44ec7b5d593e`
     */
    "Namespace": string;
    /**
     * 数据空间划分和鉴权方式。
     * - 1：基于账号
     * - 2：基于设备
     * - 101：基于账号和设备
     * @example `101`
     */
    "AuthType": string;
    /**
     * 设备ID类型。取值范围：**uuid**​/**sn**​/**vin**​/**hardware_id**。
     * > 当`AuthType=2或101`时，此项必填。
     * @example `uuid`
     */
    "DeviceIdType"?: string;
    /**
     * 设备ID。
     * @example `1ac5e182e9634252a02d442a4d5d16fc`
     */
    "DeviceId"?: string;
    /**
     * 用户ID类型。
     * - `www.weibo.com`：微博
     * - `www.openaccount.alios.cn`：AliOS
     * - `www.amap.com`：高德
     * - `www.yundevicedemo.aliyun.com`：YUNDEVICE_DEMO
     * - `anonymous`：匿名
     * > 当AuthType=1或101，此项必填。
     * @example `www.weibo.com`
     */
    "AccountType"?: string;
    /**
     * 用户ID。
     * @example `10000`
     */
    "AccountId"?: string;
}
