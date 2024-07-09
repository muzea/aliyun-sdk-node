export interface RestoreObjectRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * Object的完整路径。
     * @example `exampledir/exampleobject/txt`
     */
    "key": string;
    /**
     * 请求解冻的Obejct的版本号。
     * @example `CAEQNRiBgMClj7qD0BYiIDQ5Y2QyMjc3NGZkODRlMTU5M2VkY2U3MWRiNGRh`
     */
    "versionId"?: string;
    /**
     * 保存解冻请求信息的请求体。
     */
    "body"?: {
        /**
         * 解冻请求信息的容器。
         */
        RestoreRequest: any;
    };
}
