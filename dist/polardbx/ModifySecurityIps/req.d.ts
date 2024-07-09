export interface ModifySecurityIpsRequest {
    /**
     * 实例所属地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `pxc-hzjasd****`
     */
    "DBInstanceName": string;
    /**
     * 实例的白名单分组名称。
     * @example `default`
     */
    "GroupName"?: string;
    /**
     * 白名单分组里的IP列表，多个IP白名单间用英文逗号（,）分隔。
     * @example `127.0.0.1,192.168.0.0`
     */
    "SecurityIPList": string;
    /**
     * 白名单修改模式，取值范围如下：
     * - 0：覆盖修改白名单分组；
     * - 1：新增白名单分组；
     * - 2：删除白名单分组。
     * @example `1`
     */
    "ModifyMode"?: string;
}
