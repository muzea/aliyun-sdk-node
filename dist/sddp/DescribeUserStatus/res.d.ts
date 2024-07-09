export interface DescribeUserStatusResponse {
    /**
     * 返回结果的请求ID。
     * @example `769FB3C1-F4C9-42DF-9B72-7077A8989C13`
     */
    RequestId: string;
    /**
     * 返回当前登录账号详情列表。
     */
    UserStatus: {
        /**
         * 已使用的OSS存储量。单位：字节。
         * @example `234`
         */
        UseOssSize: number;
        /**
         * 已使用的实例数量。
         * @example `125`
         */
        UseInstanceNum: number;
        /**
         * 当前登录账号包含的实例数量。
         * @example `32`
         */
        InstanceNum: number;
        /**
         * 当前登录账号购买DSC服务的付费类型。取值：
         * - **PREPAY**：预付费。
         * - **POSTPAY**：后付费。
         * @example `PREPAY`
         */
        ChargeType: string;
        /**
         * 当前登录账号是否已授权DSC RAM的权限。取值：
         * - **true**：已授权。
         * - **false**：未授权。
         * @example `true`
         */
        Authed: boolean;
        /**
         * 是否开通资产实验室功能。取值：
         * - **1**：已开通。
         * - **0**：未开通。
         * @example `1`
         */
        LabStatus: number;
        /**
         * 当前登录账号中资产的保护期剩余天数。
         * @example `131`
         */
        RemainDays: number;
        /**
         * 当前登录账号是否试用DSC服务。取值：
         * - **true**：试用。
         * - **false**：非试用。
         * @example `true`
         */
        Trail: boolean;
        /**
         * 主账号购买的数据安全中心产品实例ID。
         * @example `sddp-cn-****`
         */
        InstanceId: string;
        /**
         * 用户授权的AccessKey ID。
         * @example `LTAI4G67HRBzNRmMhfyv****`
         */
        AccessKeyId: string;
        /**
         * 是否购买DSC服务。取值：
         * - **true**：已购买。
         * - **false**：未购买。
         * @example `true`
         */
        Purchased: boolean;
        /**
         * 当前账号拥有的权限。取值：
         * - **0**: 拥有数据安全中心的管理权限或只读权限。
         * - **1**: 拥有数据域管理权限。
         * @example `1`
         */
        DataManagerRole: number;
        /**
         * 过期到释放的时间。单位：天。
         * @example `15`
         */
        ReleaseDays: number;
        /**
         * 是否可以关闭sql洞察。取值：
         * - **true**：可以。
         * - **false**：不可以。
         * @example `true`
         */
        AuditClosable: boolean;
        /**
         * 是否可以释放sql洞察。
         * - **true**：可以。
         * - **false**：不可以。
         * @example `true`
         */
        AuditReleasable: boolean;
        /**
         * 释放时间。单位：毫秒。
         * @example `15000`
         */
        ReleaseTime: number;
        /**
         * 实例总数。
         * @example `10`
         */
        InstanceTotalCount: number;
        /**
         * OSS总存储量。单位：字节。
         * @example `2048`
         */
        OssTotalSize: number;
        /**
         * 是否曾经使用过Agent审计功能。取值：
         * - **1**：使用过。
         * - **0**：未使用过。
         * @example `1`
         */
        UseAgentAudit: boolean;
        /**
         * 累计保护用户资产的天数。
         * @example `22`
         */
        ProtectionDays: number;
    };
}
