export interface ListPluginForUuidRequest {
    /**
     * 服务器UUID。
     * > 调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口获取该参数。
     * @example `bdb7071f-129d-4ceb-af80-4cf70c4571c6`
     */
    "Uuid": string;
    /**
     * 插件类型列表。
     */
    "Types"?: string[];
}
