export interface DescribeCrossAccountsResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
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
     * 分页页码，从1开始，默认值为1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页大小，最小值为1，最大值为99，默认值为10。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总记录数。
     * @example `22`
     */
    TotalCount: number;
    CrossAccounts: {
        /**
         * 跨账号信息列表。
         */
        CrossAccount: {
            /**
             * 当前账号的账号ID。
             * @example `184164xxxxx49795`
             */
            OwnerId: number;
            /**
             * 被当前账号管理的跨账号备份的原账号ID。
             * @example `15897534xxxxx625`
             */
            CrossAccountUserId: number;
            /**
             * 被当前账号管理的跨账号备份的原账号RAM中创建的角色名。
             * @example `BackupRole`
             */
            CrossAccountRoleName: string;
            /**
             * 别名，最长为32位。
             * @example `content`
             */
            Alias: string;
            /**
             * 类型id。
             * @example `1`
             */
            Id: number;
            /**
             * 创建时间。UNIX时间，单位秒。
             * @example `1654570439`
             */
            CreatedTime: number;
            /**
             * 更新时间。UNIX时间，单位为秒。
             * @example `1640157098`
             */
            UpdatedTime: number;
        }[];
    };
}
