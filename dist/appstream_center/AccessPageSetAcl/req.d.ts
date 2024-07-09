export interface AccessPageSetAclRequest {
    /**
     * 访问页面Id。
     * @example `a-062wec3cwmayw****`
     */
    "AccessPageId": string;
    /**
     * 访问页面的访问模式。
     * @example `FREE_ACCESS`
     */
    "AccessMode": string;
    /**
     * 访问页面的名字。
     * @example `notepad_test`
     */
    "AccessPageName"?: string;
    /**
     * 访问页面Url链接的有效时间。
     * @example `7`
     */
    "EffectTime": number;
    /**
     * 有效时间单位的可选项。
     * - Month
     * - Minute
     * - Hour
     * - Day
     * @example `Day`
     */
    "Unit"?: string;
}
