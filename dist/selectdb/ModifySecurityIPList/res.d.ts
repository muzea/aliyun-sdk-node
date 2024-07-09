export interface ModifySecurityIPListResponse {
    /**
     * 请求ID。
     * @example `195F64C2-8F11-532B-A436-FC08A221D756`
     */
    RequestId: string;
    /**
     * 白名单分组名称。
     * @example `group1`
     */
    GroupName: string;
    /**
     * IP地址类型。
     * @example `ipv4`
     */
    SecurityIPType: string;
    /**
     * 分组标签。
     * @example `grouptag`
     */
    GroupTag: string;
    /**
     * 任务ID。
     * @example `479095561`
     */
    TaskId: number;
    /**
     * 实例的IP白名单，多个IP地址请用英文逗号（,）分隔。
     * @example `127.0.XX.XX,127.2.XX.XX`
     */
    SecurityIPList: string;
    /**
     * 白名单的网络类型。
     * @example `mix`
     */
    WhitelistNetType: string;
    /**
     * 实例名称。
     * @example `实例测试`
     */
    DBInstanceName: string;
}
