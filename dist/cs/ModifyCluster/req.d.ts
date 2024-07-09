export interface ModifyClusterRequest {
    /**
     * 集群ID。
     * @example `cb95aa626a47740afbf6aa099b65****`
     */
    "ClusterId": string;
    /**
     * 请求体参数。
     * @example `true`
     */
    "body"?: {
        /**
         * 集群是否绑定EIP，用于公网访问API Server。取值：
         * - `true`：集群绑定EIP。
         * - `false`：集群不绑定EIP。
         * @example `true`
         */
        api_server_eip: boolean;
        /**
         * 集群API Server绑定的EIP实例ID，仅当`api_server_eip`取值为`true`时生效。
         * @example `eip-wz9fnasl6dsfhmvci****`
         */
        api_server_eip_id: string;
        /**
         * 集群删除保护，防止通过控制台或API误删除集群。取值：
         * - `true`：启用集群删除保护，将不能通过控制台或API删除集群。
         * - `false`：不启用集群删除保护，则能通过控制台或API删除集群。
         * 默认值：`false`。
         * @example `true`
         */
        deletion_protection: boolean;
        /**
         * 实例删除保护，防止通过控制台或API误删除释放节点。取值：
         * - `true`: 不能通过控制台或API误删除集群。
         * - `false`：能通过控制台或API误删除集群。
         * 默认值：`false`。
         * @example `true`
         */
        instance_deletion_protection: boolean;
        /**
         * 重新绑定集群测试域名。取值：
         * - `true`：重新绑定集群测试域名。
         * - `false`：不重新绑定集群测试域名。
         * 默认值：`false`。
         * @example `true`
         */
        ingress_domain_rebinding: boolean;
        /**
         * 被修改集群的SLB实例ID。
         * @example `lb-wz97kes8tnndkpodw****`
         */
        ingress_loadbalancer_id: string;
        /**
         * 集群资源组ID。
         * @example `rg-acfmyvw3wjm****`
         */
        resource_group_id: string;
        /**
         * 集群维护窗口，该功能只在Pro托管版集群中生效。
         */
        maintenance_window: any;
        /**
         * 启用或禁用RRSA功能（只有托管版集群支持配置该参数）。取值：
         * - `true`：启用。
         * - `false`：禁用。
         * @example `true`
         */
        enable_rrsa: boolean;
        /**
         * 注册集群 API Server SLB 访问控制列表。
         */
        access_control_list: string[];
        /**
         * 集群名称。
         * 命名规则：由数字、汉字、英文字符或短划线（-）组成，长度范围1~63个字符，且不能以短划线（-）开头。
         * @example `cluster-new-name`
         */
        cluster_name: string;
        /**
         * 系统事件存储配置。
         */
        system_events_logging: {
            /**
             * 是否开启系统事件存储。
             * @example `true`
             */
            enabled: boolean;
            /**
             * 系统事件存储的LogProject名称。
             * @example `k8s-log-cb95aa626a47740afbf6aa099b65****`
             */
            logging_project: string;
        };
        /**
         * 集群自动运维策略。
         */
        operation_policy: {
            /**
             * 集群自动升级。
             */
            cluster_auto_upgrade: {
                /**
                 * 是否开启集群自动升级。
                 * @example `true`
                 */
                enabled: boolean;
                /**
                 * 集群自动升级频次。可取值：
                 * - patch
                 * - stable
                 * - rapid
                 * @example `patch`
                 */
                channel: string;
            };
        };
        /**
         * 自定义 API Server 证书 SAN（只有托管版集群支持配置该参数）。
         */
        api_server_custom_cert_sans: {
            /**
             * 覆盖或追加 SAN 配置。取值：
             * - overwrite: 覆盖
             * - append: 追加
             * @example `append`
             */
            action: string;
            /**
             * SAN 列表。
             */
            subject_alternative_names: string[];
        };
    };
}
