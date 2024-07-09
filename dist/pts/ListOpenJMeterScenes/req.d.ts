export interface ListOpenJMeterScenesRequest {
    /**
     * 请求的第N页。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 请求的场景数。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 场景ID。
     * @example `DYYPZIH`
     */
    "SceneId"?: string;
    /**
     * 场景名。
     * @example `test`
     */
    "SceneName"?: string;
}
