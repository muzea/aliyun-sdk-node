export type DescribeResourcesDeleteProtectionResponse = {
    /**
     * 资源实例名称。
     * @example `test`
     */
    name: string;
    /**
     * 查询资源所在的Namespace。
     * @example `default`
     */
    namespace: string;
    /**
     * 删除保护的资源类型。
     * @example `namespaces`
     */
    resource: string;
    /**
     * 是否开启删除保护。
     * - true：开启。
     * - false：关闭。
     * 默认值：false。
     * @example `false`
     */
    protection: boolean;
}[];
