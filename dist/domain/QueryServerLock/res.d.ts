export interface QueryServerLockResponse {
    /**
     * 锁生效的时间。
     * @example `2021-07-10 17:37:36`
     */
    StartDate: string;
    /**
     * 创建时间。
     * @example `2021-07-10 17:37:36`
     */
    GmtCreate: string;
    /**
     * 请求ID。
     * @example `9DFCF6F8-243C-****-8035-4B12FEFD7D48`
     */
    RequestId: string;
    /**
     * 到期时间。
     * @example `2030-07-10 17:37:36`
     */
    ExpireDate: string;
    /**
     * 查询的域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 用户UID。
     * @example `121000000****`
     */
    UserId: string;
    /**
     * 最近一次修改时间。
     * @example `2021-07-10 17:37:36`
     */
    GmtModified: string;
    /**
     * 域名实例ID。
     * @example `S20190N1DAI4****`
     */
    DomainInstanceId: string;
    /**
     * 注册局锁实例ID。
     * @example `S2021591IQ28****`
     */
    LockInstanceId: string;
    /**
     * 注册局锁状态。取值：
     * - 1：未开启
     * - 2：已开启
     * - 3：已关闭
     * @example `2`
     */
    ServerLockStatus: number;
    /**
     * 锁产品ID。
     * @example `1807**`
     */
    LockProductId: string;
}
