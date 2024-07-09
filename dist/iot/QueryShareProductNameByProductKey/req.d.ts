export interface QueryShareProductNameByProductKeyRequest {
    /**
     * 分享任务的分享码。
     * 分享任务的分享码信息，请参见[使用共享设备播报分享语料](~~607661~~)。
     * @example `52******_7**e_4**3_9**e_61**********`
     */
    "ShareTaskCode": string;
    /**
     * 共享设备所属产品的**ProductKey**。
     * @example `a2YwD2****`
     */
    "ProductKey": string;
}
