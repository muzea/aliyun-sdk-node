export interface ModifyDBClusterAccessWhiteListRequest {
    /**
     * 集群ID。
     * @example `rm-uf6wjk5xxxxxxxxxx`
     */
    "DBClusterId": string;
    /**
     * 集群的IP白名单，多个IP地址之间以英文逗号（,）隔开，不可重复，最多500个。支持如下两种格式：
     * - IP地址形式，例如：10.23.12.24。
     * - CIDR形式，例如：10.23.12.24/24（无类域间路由，24表示了地址中前缀的长度，范围为1~32）。
     * > ModifyMode值为Delete时，此参数值可以是空，其他情况下必须有非空值。
     * @example `10.23.12.24`
     */
    "SecurityIps": string;
    /**
     * 需要修改的IP白名单分组名称，默认操作**Default**分组。
     * IP白名单分组名称以小写字母开头、以数字或小写字母结尾，可包含小写字母、数字及’_’，长度为2~32。
     * 单个集群最多支持50个白名单分组。
     * @example `test`
     */
    "DBClusterIPArrayName"?: string;
    /**
     * 白名单分组属性，默认为空。
     * 控制台不显示带有**hidden**属性的分组，带有该标签的分组通常是用于访问DTS、DRDS服务的。
     * @example `hidden`
     */
    "DBClusterIPArrayAttribute"?: string;
    /**
     * 修改白名单的方式。取值：
     * - Cover：覆盖原IP白名单。
     * - Append：增加IP。
     * - Delete：删除IP。
     * 默认值：Cover。
     * @example `Cover`
     */
    "ModifyMode"?: string;
}
