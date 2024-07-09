export interface CreateMonitorGroupRequest {
    /**
     * 指定要查询的分组
     * @example `6735211ab9094c818f32f27bc545b6c8`
     */
    "GroupId": string;
    /**
     * 监控组id
     * @example `166636221`
     */
    "RawMonitorGroupId"?: number;
    /**
     * api的认证状态，取值：-**ok**：成功。-**mismatch**：重定向。-**servicenotfound**：请求错误。-**unknown**：未知错误。
     * @example `false`
     */
    "Auth": string;
}
