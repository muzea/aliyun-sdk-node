export interface UploadCloudAppResponse {
    /**
     * 请求ID
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 云应用ID，对应唯一的应用包
     * @example `cap-b06b26edfhytbn b94a75ae1a79efc90eb`
     */
    AppId: string;
}
