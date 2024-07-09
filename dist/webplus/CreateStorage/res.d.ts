export interface CreateStorageResponse {
    /**
     * 存储桶信息
     */
    Storage: {
        /**
         * 上次更新时间
         * @example `1564388637126`
         */
        UpdateTime: number;
        /**
         * 存储桶创建时间
         * @example `1564388637126`
         */
        CreateTime: number;
        /**
         * 存储桶的bucket名
         * @example `webplus-cn-shenzhen-s-5d01fab421ed1528121*****`
         */
        BucketName: string;
    };
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `E61A371C-53D9-4F66-A90E-4FC09EE*****`
     */
    RequestId: string;
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
}
