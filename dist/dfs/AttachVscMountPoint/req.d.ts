export interface AttachVscMountPointRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "InputRegionId": string;
    /**
     * 挂载点ID。
     * @example `f-037cb49e1d-c****.dfs.aliyuncs.com`
     */
    "MountPointId": string;
    /**
     * VSC类型。
     * 取值：
     * - Primary（默认值）：ECS实例上的预留默认VSC
     * - Secondary：ECS实例上的可重复VSC
     * @example `Primary`
     */
    "VscType"?: string;
    /**
     * 待挂载文件存储 HDFS 版文件系统的ECS实例ID。 添加多个ECS实例ID时，使用半角逗号（,）分隔。最多支持100个ECS实例ID。
     * @example `[
          "i-bp1g6zv0ce8oghu7****",
          "i-bp1g6zv0ce8oghu1****"
    ]`
     */
    "InstanceIds"?: string[];
    /**
     * 待挂载HDFS文件系统的VSC ID。
     * 建议添加不超过100个VSC ID。
     */
    "VscIds"?: string[];
    /**
     * 预留字段，无实际意义。
     * @example `无`
     */
    "Description"?: string;
    /**
     * 文件系统ID。
     * @example `e389e5c7-bcb4-4558-846a-e5afc444****`
     */
    "FileSystemId": string;
}
