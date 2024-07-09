export interface ListServerLockResponse {
    /**
     * 是否有上一页。
     * @example `false`
     */
    PrePage: boolean;
    /**
     * 当前域名列表的分页页码。
     * @example `0`
     */
    CurrentPageNum: number;
    /**
     * 请求ID。
     * @example `9DFCF6F8-243C-****-8035-4B12FEFD7D48`
     */
    RequestId: string;
    /**
     * 分页大小。
     * @example `5`
     */
    PageSize: number;
    /**
     * 域名列表的总页数。
     * @example `1`
     */
    TotalPageNum: number;
    /**
     * 域名列表。
     */
    Data: {
        /**
         * 注册局锁状态。取值：
         * - 1：未开启
         * - 2：已开启
         * - 3：已关闭
         * @example `2`
         */
        ServerLockStatus: string;
        /**
         * 注册局锁实例ID。
         * @example `S2021591IQ28****`
         */
        LockInstanceId: string;
        /**
         * 阿里云用户编号。
         * @example `121000000****`
         */
        UserId: string;
        /**
         * 创建时间。
         * @example `2020-02-19 16:38:07`
         */
        GmtCreate: string;
        /**
         * 到期时间。
         * @example `2030-07-10 17:37:36`
         */
        ExpireDate: string;
        /**
         * 开始时间。
         * @example `2021-07-10 17:37:36`
         */
        StartDate: string;
        /**
         * 锁产品ID。
         * @example `1807**`
         */
        LockProductId: string;
        /**
         * 域名实例ID。
         * @example `S20190N1DAI4****`
         */
        DomainInstanceId: string;
        /**
         * 最近一次修改时间。
         * @example `2022-02-19 16:40:38`
         */
        GmtModified: string;
        /**
         * 存在有效注册局锁信息的域名。
         * @example `example.com`
         */
        DomainName: string;
    }[];
    /**
     * 域名总记录数。
     * @example `2`
     */
    TotalItemNum: number;
    /**
     * 是否有下一页。
     * @example `false`
     */
    NextPage: boolean;
}
