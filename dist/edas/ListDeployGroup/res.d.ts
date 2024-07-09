export interface ListDeployGroupResponse {
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `3FDE-DS9R-*********************`
     */
    RequestId: string;
    DeployGroupList: {
        /**
         * 部署分组列表。
         */
        DeployGroup: {
            /**
             * 部署分组关联的私网SLB的虚拟服务器组ID。
             * @example `rsp-cige6******`
             */
            VServerGroupId: string;
            /**
             * 分组状态：
             * - 0：准备。
             * -  1：执行中。
             * -  2：执行成功。
             * -  3：执行失败 。
             * - 6：终止 。
             * - 10：系统异常执行失败。
             * @example `2`
             */
            Status: string;
            /**
             * 应用运行过程中，应用实例需要申请的CPU配额，单位：核数，设置为0表示不限制。
             * @example `1`
             */
            CpuRequest: string;
            /**
             * 更新时间的时间戳。
             * @example `1573627695779`
             */
            UpdateTime: number;
            /**
             * 应用运行过程中，应用实例的内存配额。单位：MB，设置为0表示不限制。
             * @example `512`
             */
            MemoryRequest: string;
            /**
             * 命名空间。
             * @example `ping****est`
             */
            NameSpace: string;
            /**
             * 分组部署记录ID。
             * @example `changeorder_a**_*******_**`
             */
            AppVersionId: string;
            /**
             * 创建时间的时间戳。
             * @example `1573627695779`
             */
            CreateTime: number;
            /**
             * 部署名称。
             * @example `test`
             */
            DeploymentName: string;
            /**
             * 停止前脚本。
             * @example `{\"exec\":{\"command\":[\"ls\",\"/\"]}}"`
             */
            PreStop: string;
            /**
             * 部署包地址。
             * @example `http://****.oss-cn-shanghai.aliyuncs.com/****​/sc-****-consumer-E.jar`
             */
            PackageUrl: string;
            /**
             * 部署包版本。
             * @example `E`
             */
            PackageVersion: string;
            /**
             * 基础组件名称。
             * @example `k8s-sc-consumer-****`
             */
            BaseComponentMetaName: string;
            /**
             * 容器集群ID。
             * @example `c66e65950db****cba92f17434df1****`
             */
            CsClusterId: string;
            /**
             * 应用ID。
             * @example `3616cdca-4f92-4413-****-************`
             */
            AppId: string;
            /**
             * 最近更新时间的时间戳。
             * @example `1587888503825`
             */
            LastUpdateTime: number;
            /**
             * 容器服务集群ID。
             * @example `497806cb-****-6a7`
             */
            Env: string;
            /**
             * 应用运行过程中，应用实例的CPU限制，单位：核数。
             * @example `400`
             */
            CpuLimit: string;
            /**
             * 分组类型：
             * - 0：默认分组。
             * - 1：流量管理没有启用灰度。
             * - 2：流量管理启用灰度。
             * @example `1`
             */
            GroupType: number;
            /**
             * 集群ID。
             * @example `0d247b93-8d62-4e34-****-************`
             */
            ClusterId: string;
            /**
             * 启动后脚本。
             * @example `{\"exec\":{\"command\":[\"ls\",\"/\"]}}"`
             */
            PostStart: string;
            /**
             * 标签。
             * @example `test`
             */
            Labels: string;
            /**
             * 应用运行过程中，应用实例的内存限制。单位：MB，设置为0表示不限制。
             * @example `0`
             */
            MemoryLimit: string;
            /**
             * 限流策略（保留字段）。
             * @example `RollingUpdate`
             */
            Strategy: string;
            /**
             * EDAS容器服务K8s集群中部署的应用的ID。
             * @example `53dd85cc-25b4-4d0e-****-6bf5465****4`
             */
            Selector: string;
            /**
             * 分组ID。
             * @example `577f4c50-16ee-43d8-****-************`
             */
            GroupId: string;
            /**
             * 分组名称。
             * @example `_DEFAULT_GROUP`
             */
            GroupName: string;
            /**
             * 集群名称。
             * @example `doc-test`
             */
            ClusterName: string;
            /**
             * 该分组部署的版本ID。
             * @example `a7d48fe8-ad8f-****-89bd-74cc1ee6****`
             */
            PackageVersionId: string;
            /**
             * 应用版本，取值在0~7之间逐次递增。
             * @example `2`
             */
            Reversion: string;
            /**
             * 部署分组关联的公网SLB的虚拟服务器组ID。
             * @example `rsp-cige6******`
             */
            VExtServerGroupId: string;
            /**
             * 部署包对外下载地址。
             * @example `http://****.oss-cn-shanghai.aliyuncs.com/****​/sc-****-consumer-E.jar`
             */
            PackagePublicUrl: string;
            /**
             * 临时存储最小资源需求，单位：GB。值为0表示不限制。
             * @example `4`
             */
            EphemeralStorageRequest: string;
            /**
             * 临时存储资源需求上限，单位：GB。值为0表示不限制。
             * @example `8`
             */
            EphemeralStorageLimit: string;
        }[];
    };
}
