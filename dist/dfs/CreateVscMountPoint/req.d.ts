export interface CreateVscMountPointRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "InputRegionId": string;
    /**
     * 文件系统ID。
     * @example `e389e5c7-bcb4-4558-846a-e5afc444****`
     */
    "FileSystemId": string;
    /**
     * 待挂载文件存储 HDFS 版文件系统的ECS实例ID。
     * 添加多个ECS实例ID时，使用半角逗号（,）分隔。最多支持100个ECS实例ID。
     * @example `[
          "i-bp1g6zv0ce8oghu7****",
          "i-bp1g6zv0ce8oghu1****"
    ]`
     */
    "InstanceIds"?: string[];
    /**
     * 挂载点描述信息。
     * 长度为0~100个字符。
     * @example `内部实例挂载的HDFS文件系统。`
     */
    "Description"?: string;
}
