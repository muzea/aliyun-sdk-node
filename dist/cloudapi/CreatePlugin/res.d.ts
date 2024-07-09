export interface CreatePluginResponse {
    /**
     * 生成的插件ID
     * @example `1f3bde29b43d4d53989248327ff737f2`
     */
    PluginId: string;
    /**
     * 是否成功标记插件
     * @example `true`
     */
    TagStatus: boolean;
    /**
     * 请求ID
     * @example `EF924FE4-2EDD-4CD3-89EC-34E4708574E7`
     */
    RequestId: string;
}
