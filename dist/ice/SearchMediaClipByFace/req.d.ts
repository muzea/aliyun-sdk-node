export interface SearchMediaClipByFaceRequest {
    /**
     * 搜索库名称。
     * @example `test1`
     */
    "SearchLibName"?: string;
    /**
     * 当前页码。默认值为1。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 每页返回的数据条数。默认值为10，最大值为50。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 实体ID。
     * @example `2d3bf1e35a1e42b5ab338d701efa****`
     */
    "EntityId"?: string;
    /**
     * 与粗搜接口里的FaceSearchToken的值保持一致，通过该参数判断是同一个搜索条件下的分页返回。
     * @example `zxtest-huangxuan-2023-3-7-V1`
     */
    "FaceSearchToken": string;
    /**
     * 媒资ID。
     * @example `3b187b3620c8490886cfc2a9578c****`
     */
    "MediaId": string;
}
