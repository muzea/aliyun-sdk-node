export interface CreateStoragePlanRequest {
    /**
     * 该参数用于保证请求的幂等性。由客户端生成该参数值，保证在不同请求间该参数值的唯一性。该参数区分大小写、长度不超过64个ASCII字符。
     * @example `6000170000591aed949d0f5********************`
     */
    "ClientToken"?: string;
    /**
     * 存储包时长单位。取值：
     * - **Month**：月
     * - **Year**：年
     * @example `Month`
     */
    "Period": string;
    /**
     * 存储包的使用时长。
     * - 当**Period**取值为**Month**时，取值为1~9。
     * - 当**Period**取值为**Year**时，取值范围：【1,2,3,5】。
     * @example `3`
     */
    "UsedTime": string;
    /**
     * 存储包的规格，单位为GB。取值范围：【50,100,200,300,500,1000,2000,3000,5000,10000,15000,20000,25000,30000,50000,100000,200000】。
     * @example `500`
     */
    "StorageClass": string;
    /**
     * 存储包类型。取值：
     * - **Mainland**：中国内地通用
     * - **Overseas**：中国香港及海外通用
     * @example `Mainland`
     */
    "StorageType": string;
}
