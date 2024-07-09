export interface ListCubeDataLevelPermissionConfigResponse {
    /**
     * 请求ID。
     * @example `D8749D65-E80A-433C-AF1B-CE9C180FF3B4`
     */
    RequestId: string;
    /**
     * {
     *     "isOpen": 1,
     *     "extraConfigModel": {           // 额外配置信息
     *             "ruleType": "ROW_LEVEL",         //行级权限类型
     *                 "missHitPolicy": "NONE",         //命中规则策略：NONE无权限，ALL有权限
     *             "cubeId": "7c7223ae-31d1-4d2f-b11f-3c744528014b"   //数据集ID
     *     },
     *     "ruleType": "ROW_LEVEL",   //行列权限类型
     *     "ruleModels": [
     *         {
     *                 "ruleUsersModel": {      // 针对的人群
     *                     "userGroups": [
     *                                         "0d5fb19b-****-1248fc27ca51",  // 用户组ID
     *                                         "4aa3f089-****-85f0-0e8ac7c2dee9"
     *                                     ],
     *                     "users": [
     *                                         "HuangJia***2e3fa822",   // 用户的UserID
     *                                         "4334***84358"
     *                                     ]
     *                  },
     *             "ruleContentModel": {
     *                 "ruleContentType": "ROW_FIELD",   //行列权限类型
     *                 "ruleContentJson": "{\"conditionNode\":{\"caption\":\"周期\",\"isMeasure\":false,\"pathId\":\"7d3b073bc6\",\"relationOperator\":\"not-null\",\"name\":\"7d3b073bc6\",\"value\":{\"value\":[\"\"],\"valueType\":\"ENUM\"}}}",             //行列权限规则的JSON串
     *                 "ruleOriginConfigJson": "{\"operator\":\"and\",\"operands\":[{\"labelName\":\"周期\",\"isValid\":true,\"uniqueId\":\"5\",\"fieldId\":\"7d3b073bc6\",\"error\":false,\"fieldType\":\"string\",\"defaultValue\":{\"selectType\":\"condition\",\"value\":{\"conditionOp\":\"not-null\",\"conditionValue\":\"\"},\"valueType\":\"ENUM\"}}],\"isRelation\":true}"
     *             },              //前端需求的固定格式JSON串
     *             "isOpen": 1,    // 行列权限配置的开关状态   1.开启  0.关闭
     *             "hitTakeEffect": 1,  // 针对列级权限，命中后规则是否生效  1生效、0不生效。
     *             "ruleName": "测试行级权限_勿删",   // 行列权限规则的名称
     *             "ruleLevelType": "ROW_LEVEL",   //行列权限类型
     *             "ruleId": "a5bb24da-772f-45e8-a43c-a891683e14da",   // 行列权限规则的ID
     *             "cubeId": "7c7223ae-31d1-4d2f-b11f-3c744528014b",  // 数据集ID
     *             "ruleTargetScope": "OTHERS"      规则生效范围：ALL所有人、OTHERS指定人
     *         }
     *     ],
     *     "cubeId": "7c7223ae-31d1-4d2f-b11f-3c744528014b"   // 数据集ID
     * }
     * @example `行列权限列表的JSON串，详情见描述。`
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
