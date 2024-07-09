export interface DeleteMediaTagRequest {
    /**
     * 需要删除标签的媒体ID。可以从[新增媒体](~~44458~~)的返回参数中获取，也可以登录媒体处理控制台，通过**媒体管理** > **媒体列表**找到目标视频，单击**管理**，从目标视频的基础信息页签获取。
     * @example `3e6149d5a8c944c09b1a8d2dc3e4****`
     */
    "MediaId": string;
    /**
     * 需要删除的媒体标签。不超过32字节，UTF8编码。
     * > 一次只能删除一个标签。
     * @example `tag1`
     */
    "Tag"?: string;
}
