export interface UpgradeHiStoreInstanceResponse {
    /**
     * 升级版本请求是否成功，成功返回 true， 失败则返回错误信息
     * @example `true`
     */
    Data: string;
    /**
     * 请求 ID
     * @example `DSSDF-SEWE-23ERW`
     */
    RequestId: string;
}
