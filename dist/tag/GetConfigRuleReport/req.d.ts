export interface GetConfigRuleReportRequest {
    /**
     * 地域ID。取值：cn-shanghai。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
    /**
     * 目标节点ID。
     * @example `154950938137****`
     */
    "TargetId"?: string;
    /**
     * 标签策略模式。取值：
     * - USER：单账号下的默认值。
     * - RD：多账号下的默认值。
     * 关于标签策略模式的更多信息，请参见[标签策略模式](~~417434~~)。
     * > 参数取值不区分大小写。
     * @example `USER`
     */
    "UserType"?: string;
    /**
     * 目标节点类型。取值：
     * - USER：查询当前登录账号的不合规资源检测报告基本信息。适用单账号模式。
     * - ROOT：查询资源目录中的Root资源夹的不合规资源检测报告基本信息。适用多账号模式。
     * - FOLDER：查询资源目录中的资源夹的不合规资源检测报告基本信息。适用多账号模式。
     * - ACCOUNT：查询资源目录中的成员的不合规资源检测报告基本信息。适用多账号模式。
     * > 参数取值不区分大小写。
     * @example `USER`
     */
    "TargetType"?: string;
}
