export interface RefreshErObjectCachesResponse {
    /**
     * 请求ID。
     * @example `3C6CCEC4-6B88-4D4A-93E4-D47B3D92CF8F`
     */
    RequestId: string;
    /**
     * 刷新返回的任务ID。多个ID用逗号（,）分隔。
     * @example `95248880`
     */
    RefreshTaskId: string;
}
