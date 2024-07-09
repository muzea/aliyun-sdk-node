export interface SearchMediaByFaceRequest {
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
     * 人脸图片URL。
     * @example `https://****.oss-cn-shanghai.aliyuncs.com/input/huangxuan****.jpg`
     */
    "PersonImageUrl": string;
    /**
     * 通过该参数判断是同一个搜索条件下的分页返回，与精搜接口里的FaceSearchToken配合使用。
     * @example `zxtest-huangxuan-2023-3-7-V1`
     */
    "FaceSearchToken": string;
    /**
     * 搜索库名称。
     * @example `test1`
     */
    "SearchLibName"?: string;
    /**
     * 媒资类型。取值：
     * - image：图片
     * - video：视频
     * @example `video`
     */
    "MediaType"?: string;
}
