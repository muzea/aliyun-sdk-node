export interface UpgradeDBInstanceEngineVersionRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 目标数据库版本，取值：
     * * **8.0**
     * * **5.7**
     * * **5.6**
     * @example `5.7`
     */
    "EngineVersion": string;
    /**
     * 生效时间，取值：
     * * **Immediate**（默认）：立即生效。
     * * **MaintainTime**：在可运维时间段内生效，请参见ModifyDBInstanceMaintainTime。
     * @example `Immediate`
     */
    "EffectiveTime"?: string;
}
