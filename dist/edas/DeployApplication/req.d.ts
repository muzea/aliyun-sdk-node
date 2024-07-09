export interface DeployApplicationRequest {
    /**
     * 应用ID。可通过查询ListApplication接口获取，请参见[ListApplication](~~423162~~)。
     * @example `3616cdca-********************`
     */
    "AppId": string;
    /**
     * 部署的应用部署包版本，最长64个字符，建议使用时间戳。
     * @example `1.0`
     */
    "PackageVersion": string;
    /**
     * 应用部署描述信息。
     * @example `Deploy by edas pop api`
     */
    "Desc"?: string;
    /**
     * 部署类型。包含`URL`和`image`（废弃参数值），其中只有Swarm集群应用支持镜像（`image`）部署。
     * @example `URL`
     */
    "DeployType": string;
    /**
     * 应用部署包（WAR或JAR）的URL地址。**DeployType**为`url`时必填，建议使用OSS存储的应用部署包路径。
     * @example `https://edas.oss-cn-hangzhou.aliyuncs.com/demo/hello-edas.war`
     */
    "WarUrl"?: string;
    /**
     * **（废弃参数）**Swarm集群应用部署时可指定的应用镜像URL，推荐使用阿里云镜像仓库地址。
     * @example `registry.cn-hangzhou.aliyuncs.com/mw/testapp:latest`
     */
    "ImageUrl"?: string;
    /**
     * 部署分组ID。可通过查询ListDeployGroup接口获取，请参见[ListDeployGroup](~~423184~~)。
     * <note>如果要部署到所有分组，参数设置为`all`。</note>
     * @example `all`
     */
    "GroupId": string;
    /**
     * 每组批次。
     * - 当指定了应用分组的GroupId为具体的某个应用分组ID时，表示向指定应用分组部署。此时可指定的最小批次数为1，最大批次数为该应用分组下正常状态的ECS实例数最大值，实际分批数结果范围：\[1，指定的分批数\] （指定的分批数=指定的分组下面ECS总数）。
     * - 当指定了应用分组的GroupId为all时，表示向所有应用分组部署，此时可指定的最小批次数为1，最大批次数为正常状态的ECS数量最多的分组下的ECS实例数。
     * @example `1`
     */
    "Batch"?: number;
    /**
     * 分批等待时间，单位：分钟。
     * - 默认为0，表示不等待。
     * - 最大为5。
     * 当实际批次数较多时，需要设置一个合理值，否则会导致本次应用部署的变更持续时间比较长。
     * @example `0`
     */
    "BatchWaitTime"?: number;
    /**
     * 部署环境变量，格式必须符合`{"name":"x","value":"y"},{"name":"x2","value":"y2"} `，`key`固定为`name`和`value`。
     * @example `[{\"name\":\"env_name_1\", \"value\":\"env_value_1\"}, {\"name\":\"env_name_2\",\"value\":\"env_value_2\"}]`
     */
    "AppEnv"?: string;
    /**
     * EDAS-Container构建包号。
     * - 如果部署时不需要更改EDAS-Container版本，则该参数可不设置。
     * - 如果需要在本次部署时，更新目标应用的EDAS-Container版本，则需要设置。
     * 有以下两种获取方式：
     * - 可通过查询容器版本列表接口ListBuildPack获取，请参见[ListBuildPack](~~149391~~)。
     * - 在[容器版本说明](~~92614~~)表格中的**构建包序号**列获取。例如`59`表示`EDAS-Container 3.5.8 版本`。
     * @example `59`
     */
    "BuildPackId"?: number;
    /**
     * 应用组件ID，参数不适用于HSF应用。可通过查询组件列表接口ListComponents接口获取，请参见[ListComponents](~~423223~~)。
     * - 当创建应用时已经设置，则本次部署不需要再设置。
     * - 如果在本次部署时需要更新目标应用的应用组件版本则需要设置。
     * 常用的应用组件ID及含义如下：
     * - 4：表示Apache Tomcat 7.0.91
     * - 7：表示Apache Tomcat 8.5.42
     * - 5：表示OpenJDK 1.8.x
     * - 6：表示OpenJDK 1.7.x
     * 更多信息，请参见[InsertApplication](~~423185~~)接口的常见应用的主要参数说明。
     * @example `7`
     */
    "ComponentIds"?: string;
    /**
     * 分批方式。
     * - 0为自动。
     * - 1为各批次间需要手动确认。可在控制台目标应用的变更流程详情中单击**继续下一批**，也可通过调用ContinuePipeline继续下一批（由于使用API部署，建议使用自动分批），请参见[ContinuePipeline](~~126990~~)。
     * @example `0`
     */
    "ReleaseType"?: number;
    /**
     * 是否为金丝雀发布。
     * - true：金丝雀发布。
     *     - 灰度发布时，必须指定灰度发布的分组ID，即GroupId。
     *     - 灰度发布作为一个批次发布。
     *     - 灰度结束后，正常发布，分组批次由Batch控制。
     * - false：非金丝雀发布（单批或分批发布）。
     * @example `true`
     */
    "Gray"?: boolean;
    /**
     * 灰度发布策略内容，请参见[DeployK8sApplication](~~423212~~)。
     * @example `{"http":{"rules":[{"conditionType":"percent","percent":10}]}}`
     */
    "TrafficControlStrategy"?: string;
}
