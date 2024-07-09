export interface TempModifyDBNodeRequest {
    /**
     * 该参数用于保证请求的幂等性。由客户端生成该参数值，保证在不同请求间该参数值的唯一性。该参数区分大小写、长度不超过64个ASCII字符。
     * @example `6000170000591aed949d0f5********************`
     */
    "ClientToken"?: string;
    /**
     * 集群ID。
     * @example `pc-xxxxxxxxxx`
     */
    "DBClusterId": string;
    /**
     * 操作类型。取值：
     * - **Modify**：临时升配
     * @example `Modify`
     */
    "OperationType": string;
    /**
     * 变更类型。当前取值固定为**TempUpgrade**。
     * @example `TempUpgrade`
     */
    "ModifyType": string;
    /**
     * 新增节点的信息。
     */
    "DBNode": {
        /**
         * 新增节点的规格。需要与原有节点保持一致。
         * > 原有节点规格请参见[DescribeDBClusters](~~98094~~)。
         * @example `polar.mysql.x4.medium`
         */
        TargetClass: string;
        /**
         * 新增节点的可用区。需要与原有节点保持一致。
         * @example `cn-hangzhou-i`
         */
        ZoneId: string;
    }[];
    /**
     * 临时升配还原时间。格式为YYYY-MM-DD hh:mm:ss。
     * > 还原时间不能早于当前时间往后推1小时，不能晚于集群到期时间的前1天。
     * @example `2021-09-23 18:16:00`
     */
    "RestoreTime": string;
}
