export interface DescribeInstanceTypeRequest {
    /**
     * 实例规格名称,可取值示例：
     * - cassandra.c.large：2核 4G
     * - cassandra.c.xlarge：4核 8G
     * - cassandra.c.2xlarge：8核 16G
     * instanceType为空时，返回全部列表。
     * @example `cassandra.c.2xlarge`
     */
    "InstanceType"?: string;
}
