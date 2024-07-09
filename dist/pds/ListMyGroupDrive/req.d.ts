export interface ListMyGroupDriveRequest {
    /**
     * A short description of struct
     */
    "domain_id"?: string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 限定此次返回资源的数量。如果不设定，默认返回100，最大不能超过100。
         * @example `100`
         */
        limit: number;
        /**
         * 设置此字段后，数据会从上次返回的位置开始继续返回。如果不设定，则从头开始返回数据。 默认值：无
         * @example `NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg`
         */
        marker: string;
    };
}
