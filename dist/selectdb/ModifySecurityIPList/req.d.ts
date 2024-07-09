export interface ModifySecurityIPListRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `selectdb-cn-7213cjv****`
     */
    "DBInstanceId": string;
    /**
     * 白名单分组名称。默认修改**Default**分组。
     * @example `default`
     */
    "GroupName": string;
    /**
     * 实例的IP白名单，多个IP地址请用英文逗号（,）分隔。
     * @example `127.0.XX.XX,127.2.XX.XX`
     */
    "SecurityIPList": string;
    /**
     * 白名单修改模式，取值说明：
     * - **0**：覆盖原白名单。
     * - **1**：增加白名单。
     * - **2**：删除白名单。
     * @example `0`
     */
    "ModifyMode": string;
}
