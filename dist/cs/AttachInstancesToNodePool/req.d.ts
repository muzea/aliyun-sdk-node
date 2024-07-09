export interface AttachInstancesToNodePoolRequest {
    /**
     * 集群ID。
     * @example `c82e6987e2961451182edacd74faf****`
     */
    "ClusterId": string;
    /**
     * 节点池ID。
     * @example `np31da1b38983f4511b490fc62108a****`
     */
    "NodepoolId": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 待添加的实例ID列表。
         */
        instances: string[];
        /**
         * 待添加实例的SSH登录密码。
         * @example `Hello1234`
         */
        password: string;
        /**
         * 是否将容器数据和镜像存储在数据盘中。取值：
         * - `true`：将容器数据和镜像存储在数据盘。
         * - `false`：不将容器数据和镜像存储在数据盘。
         * 默认值：`false`。
         * 数据盘挂载规则：
         * - 如果ECS已挂载数据盘，且最后一块数据盘的文件系统未初始化，系统会自动将该数据盘格式化为EXT4，用来存放内容/var/lib/docker、/var/lib/kubelet。
         * - 如果ECS未挂载数据盘，则不会挂载新的数据盘。
         * >当选择将数据存储至数据盘并且ECS已挂载数据盘，数据盘内原有数据将丢失，请注意备份数据。
         * @example `false`
         */
        format_disk: boolean;
        /**
         * 是否保留原实例名称。取值：
         * - `true`：保留实例名称。
         * - `false`：不保留实例名称。
         * 默认值：`true`。
         * @example `true`
         */
        keep_instance_name: boolean;
    };
}
