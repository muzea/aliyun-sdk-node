export interface ResetAccountPasswordRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `selectdb-cn-7213cjv****`
     */
    "DBInstanceId": string;
    /**
     * 数据库账号。
     * @example `admin`
     */
    "AccountName": string;
    /**
     * 数据库账号的密码，取值说明：
     * - 由大写字母、小写字母、数字和特殊字符中的至少三种组成。
     * - !@#$%^&*()_+-=为特殊字符。
     * - 长度为8~32个字符。
     * @example `a1b2c3d4@`
     */
    "AccountPassword": string;
}
