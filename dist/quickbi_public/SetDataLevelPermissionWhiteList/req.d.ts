export interface SetDataLevelPermissionWhiteListRequest {
    /**
     * {
     *     "ruleType": "ROW_LEVEL",  // 行级权限类型
     *     "usersModel": {
     *             "userGroups": [
     *                 "0d5fb19b-***-1248fc27ca51",  // 用户组ID
     *                 "3d2c23d4-***-f6390f325c2d"
     *             ],
     *             "users": [
     *                 "4334***358",  // Quick BI用户的UserID
     *                 "Huang***3fa822"
     *             ]
     *     },
     *     "cubeId": "7c7223ae-31d1-4d2f-b11f-3c744528014b"
     * }
     * @example `{"ruleType":"ROW_LEVEL","usersModel":{"userGroups":["26edcb76-****-bdbab78267cb","187e6dd5-1611-4cf7-a034-1a93bd5fecf9"],"users":["4334***358","Huang***3fa822"]},"cubeId":"7c7223ae-****44528014b"}`
     */
    "WhiteListModel": string;
}
