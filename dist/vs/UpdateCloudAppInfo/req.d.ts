export interface UpdateCloudAppInfoRequest {
    /**
     * 云应用ID，对应唯一的应用包
     * @example `cap-b06b26edfhytbn b94a75ae1a79efc90eb`
     */
    "AppId": string;
    /**
     * 应用描述信息
     * @example `用于测试使用`
     */
    "Description": string;
}
