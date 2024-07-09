export interface ListServerLockRequest {
    /**
     * 查询的域名。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 查询截止时间。
     * @example `2020-07-10 17:37:36`
     */
    "EndStartDate"?: number;
    /**
     * 查询开始时间。
     * @example `2021-07-10 17:37:36`
     */
    "BeginStartDate"?: number;
    /**
     * 域名列表的分页页码。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 域名列表的分页大小。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 接口返回错误信息语言。取值：
     * - zh：中文
     * - en：英文
     * 默认值为en。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 锁产品ID。
     * @example `1807**`
     */
    "LockProductId"?: string;
    /**
     * 注册局锁状态。取值为：
     * - 1：未开启
     * - 2：已开启
     * - 3：已关闭
     * @example `1`
     */
    "ServerLockStatus"?: number;
    /**
     * 起始过期时间。
     * @example `2020-07-10 17:37:36`
     */
    "StartExpireDate"?: number;
    /**
     * 截止过期时间。
     * @example `2021-07-10 17:37:36`
     */
    "EndExpireDate"?: number;
    /**
     * 排序字段。
     * @example `EXPIRE_DATE`
     */
    "OrderBy"?: string;
    /**
     * 业务内容（如注册时间、过期时间）的排序顺序。取值：ASC：升序。                                 DESC：倒序。
     * 不传此参数默认为DESC。
     * @example `DESC`
     */
    "OrderByType"?: string;
    /**
     * 用户IP，可设置为**127.0.0.1**。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
}
