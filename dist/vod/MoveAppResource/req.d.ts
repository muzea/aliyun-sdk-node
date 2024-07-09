export interface MoveAppResourceRequest {
    /**
     * 目标应用ID。默认取值：**app-1000000**。使用说明，请参见[多应用](~~113600~~)。
     * @example `app-****`
     */
    "TargetAppId": string;
    /**
     * 资源类型。取值：
     * - **video**：视频。
     * - **image**：图片。
     * - **attached**：辅助媒资。
     * @example `video`
     */
    "ResourceType": string;
    /**
     * 资源ID。多个ID使用英文逗号（,）分隔，一次最多20条。
     * @example `9afb4****06de180880e,f7bba****caa546cfe2ba`
     */
    "ResourceIds": string;
}
