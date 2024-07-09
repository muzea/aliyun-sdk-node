export interface SaveHotspotTagListRequest {
    /**
     * 场景Id
     * @example `tqwiuwetwet****`
     */
    "SceneId": string;
    /**
     * 热点数据，json字符串数组
     * @example `[{}]`
     */
    "HotspotListJson": string;
}
