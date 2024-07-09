export interface AttachInstancesRequest {
    /**
     * 集群ID。
     * @example `c106f377e16f34eb1808d6b9362c9****`
     */
    "ClusterId": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 待添加实例列表。
         */
        instances: string[];
        /**
         * 待添加实例的密钥对名称，和`login_password`二选一。
         * > 指定`nodepool_id`后，该参数不支持。
         * @example `security-key`
         */
        key_pair: string;
        /**
         * 待添加实例的SSH登录密码，和`key_pair`二选一。密码规则为8~30个字符，且至少同时包含三项（大小写字母、数字和特殊符号），不支持反斜线（\）和半角双引号（"）两个符号。
         * 出于安全性考虑，密码传输过程中都是经过加密处理的。
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
         * 默认值：`false`。
         * @example `false`
         */
        keep_instance_name: boolean;
        /**
         * 是否为边缘节点，即ENS节点。取值：
         * - `true`：表示添加的节点是边缘节点。
         * - `false`：表示添加的节点是不是边缘节点。
         * 默认值：`false`。
         * > 如果是边缘节点，取值必须是`true`，用于标识该节点类型为ENS节点。
         * @example `false`
         */
        is_edge_worker: boolean;
        /**
         * 节点池ID。如果不指定，则将节点添加到默认节点池中。
         * @example `np615c0e0966124216a0412e10afe0****`
         */
        nodepool_id: string;
        /**
         * 自定义镜像ID，如果不传则使用默认系统镜像。
         * >- 实例系统盘镜像将被替换为该镜像。
         * - 指定`nodepool_id`后，该参数不支持。
         * @example `aliyun_2_1903_x64_20G_alibase_20200529.vhd`
         */
        image_id: string;
        /**
         * 节点CPU管理策略。当集群版本在1.12.6及以上时支持以下两种策略：
         * - `static`：允许为节点上具有某些资源特征Pod增强其CPU亲和性和独占性。
         * - `none`：表示启用现有的默认CPU亲和性方案。
         * 默认值：`none`。
         * > 指定`nodepool_id`后，该参数不支持。
         * @example `none`
         */
        cpu_policy: string;
        /**
         * 节点自定义数据。更多详情，请参见[生成实例自定义数据](~~49121~~)。
         * > 指定`nodepool_id`后，该参数不支持。
         * @example `IyEvdXNyL2Jpbi9iYXNoCmVjaG8gIkhlbGxvIEFDSyEi`
         */
        user_data: string;
        /**
         * RDS实例列表。
         */
        rds_instances: string[];
        /**
         * 容器运行时。
         * > 指定`nodepool_id`后，该参数不支持。
         */
        runtime: any;
        /**
         * 节点标签。标签定义规则：
         * - 标签由区分大小写的键值对组成，您最多可以设置20个标签。
         * - 标签键不可以重复，最长为64个字符；标签值可以为空，最长为128个字符。标签键和标签值都不能以`aliyun`、`acs:`、`https://`或`http://`开头。详情请参见[Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set)。
         * > 指定`nodepool_id`后，该参数不支持。
         */
        tags: any[];
    };
}
