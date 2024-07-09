export interface ModifyDtsJobPasswordRequest {
    /**
     * 迁移、同步或订阅任务ID。
     * @example `l3m1213ye7l****`
     */
    "DtsJobId": string;
    /**
     * 待修改数据库的账号名称。
     * > 本参数为必填参数。
     * @example `dtstest`
     */
    "UserName"?: string;
    /**
     * 修改后的账号密码。
     * > 本参数应为必填参数，且不能与当前密码一致。
     * @example `Test123456`
     */
    "Password"?: string;
    /**
     * 待修改的账号密码所属的数据库，取值：
     * - **src**：源库。
     * - **dest**：目标库。
     * > 本参数为必填参数。
     * @example `src`
     */
    "Endpoint"?: string;
    /**
     * 实例所属的地域，请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    "ZeroEtlJob"?: boolean;
    "ResourceGroupId"?: string;
}
