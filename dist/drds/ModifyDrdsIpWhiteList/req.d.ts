export interface ModifyDrdsIpWhiteListRequest {
    /**
     * 实例ID。
     * @example `drds****c6vxxyzd`
     */
    "DrdsInstanceId": string;
    /**
     * 数据库名称。
     * @example `test`
     */
    "DbName": string;
    /**
     * 修改后的白名单列表，多个白名单IP间用英文（,）分隔。
     * @example `127.***.***.***,10.***.***.***`
     */
    "IpWhiteList": string;
    /**
     * 修改模式，取值范围如下：
     * * `true`：追加修改
     * * `false`：覆盖修改
     * @example `false`
     */
    "Mode"?: boolean;
    /**
     * 白名单分组。
     * @example `drds_******`
     */
    "GroupName"?: string;
    /**
     * 白名单分组描述。
     * @example `分组1`
     */
    "GroupAttribute"?: string;
}
