export interface ConfigAppRequest {
    /**
     * 应用的ID标识串（PID）。多个PID以半角逗号（,）分隔。
     * @example `iioe7jcnuk@582846f37******,atc889zkcf@d8deedfa9bf******`
     */
    "AppIds": string;
    /**
     * 打开或关闭一个或多个应用的Agent总开关。关闭开关后即停止监控。如果不填写该参数，则表示查询目标应用当前的Agent总开关状态。
     * - `true`：打开Agent总开关
     * - `false`：关闭Agent总开关
     * @example `true`
     */
    "Enable"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 应用类型，目前仅支持设置为**TRACE**。
     * @example `TRACE`
     */
    "Type"?: string;
}
