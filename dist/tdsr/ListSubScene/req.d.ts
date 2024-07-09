export interface ListSubSceneRequest {
    /**
     * 场景ID（加密ID）
     * @example `L2omaCMmQZZkEg4pE****`
     */
    "SceneId": string;
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
    /**
     * 是否返回标注数据
     * @example `true`
     */
    "ShowLayoutData"?: boolean;
    /**
     * 排序字段，默认：NAME（名称），SEQUENCE（自定义序列）
     * @example `NAME`
     */
    "SortField"?: string;
}
