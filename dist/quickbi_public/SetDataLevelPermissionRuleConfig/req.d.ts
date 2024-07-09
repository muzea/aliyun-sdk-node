export interface SetDataLevelPermissionRuleConfigRequest {
    /**
     * {
     *     "rule": "a5bb24da-****-a891683e14da",   // 行列权限规则的ID,当传入时为修改行级权限规则,否则新增
     *     "cubeId": "7c7223ae-****-3c744528014b",  // 数据集ID
     *     "ruleName": "测试行级权限", // 行级权限规则的名称
     *     "ruleLevelType": "ROW_LEVEL", // 行级权限类型：ROW_LEVEL：行级权限,COLUMN_LEVEL：列级权限
     *     "ruleTargetScope": "ALL", // 行级权限规则针对的人群：1：所有人,2：指定人
     *     "hitTakeEffect": 1, //命中后规则生效还是不生效（针对列级权限）：1：生效 （默认生效）,0：不生效
     *     "ruleUsersModel": {
     *         "userGroups": [
     *             "9bd2c6440ac542****589f16bf12ca8178dd", // 用户组人群的用户组ID
     *             "0d5fb19b-****-1248fc27ca51",
     *             "3d2c23d4-****-f6390f325c2d"
     *         ],
     *         "users": [
     *             "43342****3784358", // 用户人群的UserID
     *             "Huang****2e3fa822"
     *         ]
     *     },
     *     "ruleContentModel": {
     *         "ruleContentType": "ROW_FIELD", // 行列权限的规则类型
     *         "ruleContentJson": "{\"conditionNode\":{\"caption\":\"周期\",\"isMeasure\":false,\"pathId\":\"7d3b***bc6\",\"relationOperator\":\"not-null\",\"name\":\"7d3b***bc6\",\"value\":{\"value\":[\"\"],\"valueType\":\"ENUM\"}}}", // 规则的JSON字符串
     *         "ruleOriginConfigJson": "{\"operator\":\"and\",\"operands\":[{\"labelName\":\"周期\",\"isValid\":true,\"uniqueId\":\"5\",\"fieldId\":\"7d3b***bc6\",\"error\":false,\"fieldType\":\"string\",\"defaultValue\":{\"selectType\":\"condition\",\"value\":{\"conditionOp\":\"not-null\",\"conditionValue\":\"\"},\"valueType\":\"ENUM\"}}],\"isRelation\":true}" // 前端模板要是用的JSON结果（行级权限专用）
     *     }
     * }
     * @example `{
        "cubeId": "aa574353-41cf-****-8d0d-455176c101fa",
        "hitTakeEffect": 1,
        "isOpen": 1,
        "permissionMode": "COMPLEX",
        "ruleContentModel": {
            "ruleContent": {
                "pathId": [
                    "264b7a970b"
                ]
            },
            "ruleContentJson": "{\"pathId\":[\"264b7a970b\"]}",
            "ruleContentType": "COLUMN_FORBID"
        },
        "ruleId": "3971fa8e-f7e0-****-b6e3-5b3167dd7247",
        "ruleLevelType": "COLUMN_LEVEL",
        "ruleName": "规则名称",
        "ruleTargetScope": "ALL"
    }`
     */
    "RuleModel": string;
}
