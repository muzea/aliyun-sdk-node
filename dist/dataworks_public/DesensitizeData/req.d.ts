export interface DesensitizeDataRequest {
    /**
     * 输入的待脱敏数据。
     * @example `15365291784`
     */
    "Data": string;
    /**
     * 脱敏场景码。您可以进入DataWorks管控台的数据保护伞，在数据脱敏管理页面查看。
     * @example `_default_scene_code`
     */
    "SceneCode": string;
}
