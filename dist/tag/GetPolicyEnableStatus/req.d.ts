export interface GetPolicyEnableStatusRequest {
    /**
     * 地域ID。取值：cn-shanghai。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
    /**
     * 标签策略模式。用于查询的过滤条件。取值：
     * - USER：单账号模式。
     * - RD：多账号模式。
     * 关于标签策略模式的更多信息，请参见[标签策略模式](~~417434~~)。
     * > 参数取值不区分大小写。
     * @example `RD`
     */
    "UserType"?: string;
    /**
     * 开通类型。取值：
     * - TAG_POLICY：标签策略。
     * - VERIFY_NO_TAG：强校验能力。
     * @example `TAG_POLICY`
     */
    "OpenType"?: string;
}
