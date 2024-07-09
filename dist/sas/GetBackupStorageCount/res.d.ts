export interface GetBackupStorageCountResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `33C2CCFF-4BF8-5F88-9B5C-22F932F80E5A`
     */
    RequestId: string;
    /**
     * 防勒索存储容量的详情。
     */
    BackupStorageCount: {
        /**
         * 防勒索使用量是否超过已购买的容量。取值：
         * - **0**：未超过
         * - **1**：已超过
         * @example `0`
         */
        Overflow: number;
        /**
         * 备份数据中，数据库备份已占用的存储容量。单位为Byte。
         * @example `7453049350`
         */
        UniUsageStorageByte: number;
        /**
         * 已购买的防勒索容量。单位为Byte。
         * @example `2276332666880`
         */
        BuyStorageByte: number;
        /**
         * 已使用的防勒索存储总容量。单位为Byte。
         * @example `839621565853`
         */
        UsageStorageByte: number;
        /**
         * 备份数据中，服务器备份已占用的存储容量。单位为Byte。
         * @example `817262417803`
         */
        EcsUsageStorageByte: number;
    };
}
