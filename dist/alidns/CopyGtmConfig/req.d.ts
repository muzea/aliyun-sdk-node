export interface CopyGtmConfigRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 源对象Id，目前仅支持实例id。
     * @example `gtm-cn-0pp1j84v60d`
     */
    "SourceId": string;
    /**
     * 目标对象Id，目前仅支持实例id。
     * @example `gtm-cn-v0h1gaujg06`
     */
    "TargetId": string;
    /**
     * 复制类型，目前仅支持INSTANCE。
     * @example `INSTANCE`
     */
    "CopyType": string;
}
