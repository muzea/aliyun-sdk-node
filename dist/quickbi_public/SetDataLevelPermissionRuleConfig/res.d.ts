export interface SetDataLevelPermissionRuleConfigResponse {
    /**
     * 请求ID。
     * @example `D8749D65-E80A-433C-AF1B-CE9C180FF3B4`
     */
    RequestId: string;
    /**
     * 保存成功的行列权限信息。
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
    Result: string;
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
}
