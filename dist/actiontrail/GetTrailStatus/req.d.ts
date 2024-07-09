export interface GetTrailStatusRequest {
    /**
     * 跟踪名称。
     * 长度为6～36个字符，必须以小写英文字母开头，可包含小写英文字母、数字、短划线（-）和下划线（_）。
     * > 同一账号内跟踪名称不可重复。
     * @example `trail-test`
     */
    "Name": string;
    /**
     * 是否查询多账号跟踪状态，取值：
     * - true：查询多账号跟踪状态。
     * - false（默认值）：查单账号跟踪状态。
     * @example `false`
     */
    "IsOrganizationTrail"?: boolean;
}
