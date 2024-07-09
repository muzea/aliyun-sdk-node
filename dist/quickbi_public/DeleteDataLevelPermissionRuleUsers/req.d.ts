export interface DeleteDataLevelPermissionRuleUsersRequest {
    /**
     * {
     *     "ruleId": "a5bb24da-***-a891683e14da", // 行列权限规则ID
     *     "cubeId": "7c7223ae-***-3c744528014b", // 数据集ID
     *     "delModel": {
     *         "userGroups": [
     *             "0d5fb19b-***-1248fc27ca51", // 删除用户组人群的用户组ID
     *             "3d2c23d4-***-f6390f325c2d"
     *         ],
     *         "users": [
     *             "4334***358", // 删除用户人群的UserID
     *             "Huang***3fa822"
     *         ]
     *     }
     * }
     * @example `	{"ruleId":"a5bb24da-***-a891683e14da","cubeId":"7c7223ae-***-3c744528014b","delModel":{"userGroups":["0d5fb19b-***-1248fc27ca51","3d2c23d4-***-f6390f325c2d"],"users":["4334***358","Huang***3fa822"]}}`
     */
    "DeleteUserModel": string;
}
