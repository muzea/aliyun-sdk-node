export interface UpdateRegisteredLocationRequest {
    /**
     * HTTP
     */
    "body"?: {
        /**
         * Location ID
         * > 您可以调用接口RegisterLocation获取Location ID。
         * @example `LOC-AB8FBC17F95A4AF5`
         */
        LocationId: string;
        /**
         * 是否启用OSS存储空间清单
         * @example `true`
         */
        InventoryCollectEnabled: boolean;
        /**
         * 是否启用OSS日志转存
         * @example `true`
         */
        OssLogCollectEnabled: boolean;
    };
}
