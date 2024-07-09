export interface DescribeCharacterSetNameRequest {
    /**
     * 地域ID。
     * > 您可以通过[DescribeRegions](~~98041~~)接口查看可用地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * > 当前仅支持查看PolarDB MySQL版集群数据库支持的字符集列表。若输入PolarDB PostgreSQL版集群或PolarDB PostgreSQL版（兼容Oracle）集群的集群ID，`CharacterSetNameItems`会返回空值。
     * @example `pc-****************`
     */
    "DBClusterId"?: string;
}
