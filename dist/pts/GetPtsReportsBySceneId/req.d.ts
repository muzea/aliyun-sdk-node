export interface GetPtsReportsBySceneIdRequest {
    /**
     * 场景ID。
     * @example `NGBCD4K`
     */
    "SceneId": string;
    /**
     * 分页操作中当前显示第几页。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页显示报告条数，取值范围5~100。
     * @example `10`
     */
    "PageSize": number;
}
