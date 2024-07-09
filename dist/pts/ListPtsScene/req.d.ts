export interface ListPtsSceneRequest {
    /**
     * 第几页，取值范围1~1073741824。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页显示场景条数，取值范围10~1000。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 关键字，可以通过对场景名**SceneName**进行模糊搜索或者对场景ID**SceneId**进行精确搜索。
     * @example `测试下单`
     */
    "KeyWord"?: string;
}
