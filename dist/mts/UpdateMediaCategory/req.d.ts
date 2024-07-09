export interface UpdateMediaCategoryRequest {
    /**
     * 需要更新类目的媒体ID。
     * > 媒体ID可以从[新增媒体](~~44458~~)的返回参数中获取，也可以登录媒体处理控制台，通过**媒体管理>媒体列表**找到目标视频，单击**管理**，从目标视频的基础信息页签获取。
     * @example `3e1cd21131a94525be55acf65888****`
     */
    "MediaId": string;
    /**
     * 类目ID，不能为负数。
     * @example `1`
     */
    "CateId"?: number;
}
