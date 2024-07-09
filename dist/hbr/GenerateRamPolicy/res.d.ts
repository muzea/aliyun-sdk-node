export interface GenerateRamPolicyResponse {
    /**
     * 返回码，200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息描述，成功一般返回successful，错误时会返回相应错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 权限策略内容。
     * @example `{     "Version": "1",     "Statement": [         {             "Effect": "Deny",             "Action": [                 "hbr:CreateRestore",                 "hbr:CreateRestoreJob",                 "hbr:CreateHanaRestore",                 "hbr:CreateUniRestorePlan",                 "hbr:CreateSqlServerRestore"             ],             "Resource": [                 "acs:hbr:*:1178******531:vault/v-000******blx06",                 "acs:hbr:*:1178******531:vault/v-000******blx06/client/*"             ]         }     ] }`
     */
    PolicyDocument: string;
    /**
     * 请求是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
}
