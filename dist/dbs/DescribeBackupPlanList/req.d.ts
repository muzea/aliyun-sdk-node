export interface DescribeBackupPlanListRequest {
    /**
     * 备份计划ID，支持查询多个备份计划，英文逗号（,）分隔。
     * @example `dbstooi01exXXXX`
     */
    "BackupPlanId"?: string;
    /**
     * DBS地域，可通过调用[DescribeRegions](~~437238~~)接口查看DBS支持地域。
     * @example `cn-hangzhou`
     */
    "Region"?: string;
    /**
     * 每页的记录数，取值为1~100。
     * > 默认为**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，大于等于0且不超过Integer的最大值，默认值为：0。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 备份计划名称。
     * @example `test123`
     */
    "BackupPlanName"?: string;
    /**
     * 备份计划状态，取值：
     * * **wait**：未配置
     * * **init**：未启动（预检查失败）
     * * **running**：运行中
     * * **stop**：失败
     * * **pause**：暂停
     * * **locked**：锁定中
     * * **check_pass**：预检查通过
     * @example `wait`
     */
    "BackupPlanStatus"?: string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。
     * @example `ASDASDASDSADASFCZXVZ`
     */
    "ClientToken"?: string;
    /**
     * 资源组ID。
     * @example `rg-aekzecovzti****`
     */
    "ResourceGroupId"?: string;
}
