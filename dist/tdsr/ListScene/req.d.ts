export interface ListSceneRequest {
    /**
     * 主场景名称
     * @example `场景A`
     */
    "Name"?: string;
    /**
     * 所有项目ID
     * @example `1234****`
     */
    "ProjectId": string;
    /**
     * 页码
     * @example `1`
     */
    "PageNum": number;
    /**
     * 页长
     * @example `20`
     */
    "PageSize": number;
}
