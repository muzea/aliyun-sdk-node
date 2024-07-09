export interface DescribePropertyScaItemRequest {
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 设置是否强制刷新待查询数据。取值：
     * - **true**：强制刷新
     * - **false**：不强制刷新
     * @example `false`
     */
    "ForceFlush"?: boolean;
    /**
     * 要查询的资产指纹的类型，默认值为**sca**。取值：
     * - **sca**：中间件
     * - **sca_database**：数据库
     * - **sca_web**：Web服务
     * > 不设置此参数时，默认取值为**sca**，表示查询中间件类型的资产指纹信息。
     * @example `sca`
     */
    "Biz"?: string;
    /**
     * 设置查询条件的类型。取值：
     * - **name**：中间件、数据库或Web服务的名称。
     * - **type**：中间件、数据库或Web服务的类型。
     * > **SearchItem**和**SearchInfo**这两个参数配合使用，通过同时设置这两个参数（设置一个无效），您可以按照资产指纹的名称或类型查看指定名称或类型资产指纹的所有数据。
     * @example `type`
     */
    "SearchItem"?: string;
    /**
     * 要查询的内容。根据**SearchItem**取值的不同，您需要输入不同的查询内容：
     * - **SearchItem**取值为**name**时，您需要输入的查询条件为资产指纹的名称。
     * - **SearchItem**取值为**type**时，您需要选择要查询的资产指纹的类型。可选以下取值：
     *     - **system_service**：系统服务
     *     - **software_library**：软件库
     *     - **docker_component**：容器组件
     *     - **database**：数据库
     *     - **web_container**：Web容器
     *     - **jar**：Jar包
     *     - **web_framework**：Web框架
     * > **SearchItem**和**SearchInfo**这两个参数配合使用，通过同时设置这两个参数（设置一个无效），您可以按照资产指纹的名称或类型查看指定名称或类型资产指纹的所有数据。
     * @example `system_service`
     */
    "SearchInfo"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 指定分页查询时，每页显示的数据最大条数。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: number;
}
