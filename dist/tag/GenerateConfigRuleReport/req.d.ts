export interface GenerateConfigRuleReportRequest {
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
     * 目标节点类型。取值：
     * - USER：为当前登录账号生成不合规资源的检测报告。适用单账号模式。
     * - ROOT：为资源目录中的Root资源夹生成不合规资源的检测报告。适用多账号模式。
     * - FOLDER：为资源目录中的资源夹生成不合规资源的检测报告。适用多账号模式。
     * - ACCOUNT：为资源目录中的成员生成不合规资源的检测报告。适用多账号模式。
     * > 参数取值不区分大小写。
     * @example `ACCOUNT`
     */
    "TargetType"?: string;
    /**
     * 标签策略模式。取值：
     * - USER：单账号模式下的默认值。
     * - RD：多账号模式下的默认值。
     * 关于标签策略模式的更多信息，请参见[标签策略模式](~~417434~~)。
     * > 如果资源目录的管理账号同时启用了资源目录多账号模式和管理账号单账号模式，则该参数必须设置。参数取值不区分大小写。
     * @example `USER`
     */
    "UserType"?: string;
}
