export interface SetPresetRequest {
    /**
     * 设备ID。
     * @example `348*****380-cn-qingdao`
     */
    "Id": string;
    /**
     * 预置位ID。
     * 取值：1~7
     * @example `2`
     */
    "PresetId": string;
}
