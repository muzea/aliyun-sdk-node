export interface QueryTagsRequest {
    /**
     * AppKey信息。
     * @example `23267207`
     */
    "AppKey": number;
    /**
     * 设备、账号或别名， 每次只能查询1个clientKey。
     * @example `e2ba19de97604f55b165576****`
     */
    "ClientKey": string;
    /**
     * ClientKey的类型。
     * @example `DEVICE`
     */
    "KeyType": string;
}
