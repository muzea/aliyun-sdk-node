export interface AddDataLevelPermissionWhiteListRequest {
    /**
     * 数据集ID。
     * @example `7c7223ae-***-3c744528014b`
     */
    "CubeId": string;
    /**
     * 行级权限类型：
     * - ROW_LEVEL：行级权限，
     * - COLUMN_LEVEL：列级权限
     * @example `ROW_LEVEL`
     */
    "RuleType"?: string;
    /**
     * 操作类型：
     * - ADD：增加白名单
     * - DELETE：删除白名单
     * @example `ADD`
     */
    "OperateType"?: string;
    /**
     * 修改白名单对应的类型：
     * - 1：用户
     * - 2：用户组
     * @example `1`
     */
    "TargetType"?: string;
    /**
     * 授权对象，同时支持多个授权对象，多个对象以英文逗号分隔。取值范围：
     * - TargetType=1（用户）时，为用户ID。
     * - TargetType=2（用户组）时，为用户组ID。
     * @example `43342***435,1553a****41231`
     */
    "TargetIds"?: string;
}
