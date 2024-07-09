export interface DescribeColdStorageResponse {
    /**
     * 冷存储开启状态，返回值：
     * - **open**： 已开启。
     * - **close**：未开启。
     * @example `open`
     */
    OpenStatus: string;
    /**
     * 请求ID。
     * @example `DCB9479E-F05F-4D1C-AFB7-C639B87764B7`
     */
    RequestId: string;
    /**
     * 实例的付费类型，返回值：
     * - **PREPAY** ：包年包月（预付费）。
     * - **POSTPAY**：按量付费（后付费）。
     * @example `POSTPAY`
     */
    PayType: string;
    /**
     * 冷存储空间的使用率，单位为%。
     * > 当**OpenStatus**返回值为**open**时才会返回此参数。
     * @example `20.00`
     */
    ColdStorageUsePercent: string;
    /**
     * 冷存储空间的使用量，单位为GB。
     * > 当**OpenStatus**返回值为**open**时才会返回此参数。
     * @example `20.00`
     */
    ColdStorageUseAmount: string;
    /**
     * 冷存储的总存储容量，单位为GB。
     * > 当**OpenStatus**返回值为**open**时才会返回此参数。
     * @example `800`
     */
    ColdStorageSize: string;
    /**
     * 冷存储类型，新创建的BDS实例冷存储类型为**BdsColdStorage**，其他默认不返回此参数。
     * @example `BdsColdStorage`
     */
    ColdStorageType: string;
    /**
     * 实例ID。
     * @example `ld-bp1uoihlf82e8****`
     */
    ClusterId: string;
}
