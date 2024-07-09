export interface UpdateInstanceResourceRequest {
    /**
     * 实例ID，可通过接口[ListInstances](~~2411819~~)获取。
     * @example `pairec-cn-test1`
     */
    "InstanceId": string;
    /**
     * 资源ID。
     * @example `reso-2s416t***`
     */
    "ResourceId": string;
    /**
     * 请求结构体。
     */
    "body"?: {
        /**
         * 资源地址。
         * @example `bucket-test-123`
         */
        Uri: string;
        /**
         * 资源配置信息。
         * @example `{}`
         */
        Config: string;
    };
}
