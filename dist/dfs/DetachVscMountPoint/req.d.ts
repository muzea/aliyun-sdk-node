export interface DetachVscMountPointRequest {
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
     * 待解绑HDFS文件系统的ECS实例ID。
     * 添加多个ECS实例ID时，请使用半角逗号（,）间隔，建议添加不超过50个ECS实例ID。
     * @example `[
          "i-bp1g6zv0ce8oghu7****",
          "i-bp1g6zv0ce8oghu1****"
    ]`
     */
    "InstanceIds"?: string[];
    /**
     * 待解绑HDFS文件系统的VSC ID。
     * 建议添加不超过50个VSC ID。
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
