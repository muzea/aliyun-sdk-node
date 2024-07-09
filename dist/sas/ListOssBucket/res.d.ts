export interface ListOssBucketResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `3956048F-9D73-5EDB-834B-4827BB48****`
     */
    RequestId: string;
    /**
     * 数据详情。
     */
    Data: {
        /**
         * Bucket名称。
         * @example `iboxpublic****`
         */
        BucketName: string;
        /**
         * 是否支持检测。取值：
         * - true：支持。
         * - false：不支持。
         * @example `true`
         */
        Support: boolean;
        /**
         * 如果不支持检测，不支持的原因。
         * @example `Unsupported Region。`
         */
        Message: string;
        /**
         * Bucket的存储类型。 取值：
         * - Standard（默认）：标准存储
         * - IA：低频访问
         * - Archive：归档存储
         * - ColdArchive：冷归档存储
         * @example `Standard`
         */
        StorageClass: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 是否支持配置。取值：
         * * true：支持
         * * false：不支持
         * @example `true`
         */
        SupportConfig: string;
    }[];
}
