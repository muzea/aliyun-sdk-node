export interface DescribeMongoDBLogConfigResponse {
    /**
     * 审计日志的project名称。
     * @example `nosql-176498472570****-cn-hangzhou`
     */
    UserProjectName: string;
    /**
     * 请求ID。
     * @example `664ECE26-658A-47C5-88F6-870B0132E8D2`
     */
    RequestId: string;
    /**
     * 当前地域中是否存在审计日志的project。取值：
     * - **1**：存在。
     * - **0**或**null**：不存在。
     * @example `1`
     */
    IsUserProjectLogstoreExist: number;
    /**
     * 是否已创建将审计日志分发到Logtail的规则。关于Logtail的详细信息，请参见[Logtail简介](~~28979~~)。取值：
     * - **1**：已创建。
     * - **0**或**null**：未创建。
     * @example `1`
     */
    IsEtlMetaExist: number;
    /**
     * 审计日志的版本类型。
     * - **Trial**：免费试用版。
     * - **Standard**：正式版。
     * @example `Standard`
     */
    ServiceType: string;
    /**
     * 是否开启云数据库MongoDB审计日志功能。
     * - **true**：开启。
     * - **false**：未开启。
     * @example `true`
     */
    EnableAudit: boolean;
    /**
     * 免费试用版审计日志的保留时长，单位为天。
     * @example `1`
     */
    TtlForTrail: number;
    /**
     * 免费试用版审计日志已使用的存储容量，单位为字节。
     * @example `12548178759`
     */
    UsedStorageForTrail: number;
    /**
     * 免费试用版审计日志可使用存储容量的上限，单位为字节。可设置最高上限为107374182400字节。
     * @example `107374182400`
     */
    PreserveStorageForTrail: number;
    /**
     * 正式版审计日志的保留时长，取值范围为1~365天。
     * @example `30`
     */
    TtlForStandard: number;
    /**
     * 正式版审计日志已使用的存储容量，单位为字节。
     * @example `20163`
     */
    UsedStorageForStandard: number;
    /**
     * 正式版审计日志可使用存储容量的上限。如果值为-1，说明未设置上限。
     * @example `-1`
     */
    PreserveStorageForStandard: number;
}
