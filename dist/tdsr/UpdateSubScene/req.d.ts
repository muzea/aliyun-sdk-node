export interface UpdateSubSceneRequest {
    /**
     * 子场景ID
     * @example `1234****`
     */
    "Id": string;
    /**
     * 子场景名称（规则：^[0-9a-zA-Z_\-\u4e00-\u9fa5]{1,20}$）
     * @example `客厅`
     */
    "Name"?: string;
    /**
     * 视角坐标，目前支持3元坐标，4元坐标，例如：[0.94005,0.13397,-0.3136,0.782992]
     */
    "ViewPoint"?: number[];
}
