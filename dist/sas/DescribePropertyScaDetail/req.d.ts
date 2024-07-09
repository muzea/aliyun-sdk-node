export interface DescribePropertyScaDetailRequest {
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
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
     * @example `name`
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
     * @example `openssl`
     */
    "SearchInfo"?: string;
    /**
     * 要查询的资产指纹的名称。
     * @example `openssl`
     */
    "ScaName"?: string;
    /**
     * 要查询的中间件、数据库或Web服务的类型。取值：
     * - **system_service**：系统服务
     * - **software_library**：软件库
     * - **docker_component**：容器组件
     * - **database**：数据库
     * - **web_container**：Web容器
     * - **jar**：Jar包
     * - **web_framework**：Web框架
     * @example `system_service`
     */
    "BizType"?: string;
    /**
     * 子查询条件的类型。取值：
     * - **port**：端口
     * - **pid**：进程ID
     * - **version**：版本
     * - **user**：用户
     * @example `version`
     */
    "SearchItemSub"?: string;
    /**
     * 子查询条件的内容。根据**SearchItemSub**取值的不同，您需要输入不同的查询内容：
     * - **SearchItemSub**取值为**port**时，您需要输入的子查询条件为端口。
     * - **SearchItemSub**取值为**pid**时，您需要输入的子查询条件为进程ID。
     * - **SearchItemSub**取值为**version**时，您需要输入的子查询条件为中间件、数据库或Web服务版本。
     * - **SearchItemSub**取值为**user**时，您需要输入的子查询条件为用户名称。
     * > 子查询条件可以帮助您搜索具体的中间件、数据库或Web服务的数据列表。
     * @example `1.0.2k`
     */
    "SearchInfoSub"?: string;
    /**
     * 搜索条件（服务器名称或IP）。
     * > 支持模糊搜索。
     * @example `192.168`
     */
    "Remark"?: string;
    /**
     * 中间件、数据库或Web服务的名称。
     * > 此参数已废弃，无需关注。
     * @example `1`
     */
    "Name"?: number;
    /**
     * 中间件、数据库或Web服务所在服务器的UUID。
     * @example `uuid-02ebabe7-1c19-ab****`
     */
    "Uuid"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 设置分页查询时，每页显示的资产指纹信息的数量。默认值为**10**，表示每页显示10条资产指纹信息。
     * > 建议PageSize取值不要为空。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 中间件、数据库或Web服务版本。
     * @example `1.0.2k`
     */
    "ScaVersion"?: string;
    /**
     * 进程监听端口。
     * @example `68`
     */
    "Port"?: string;
    /**
     * 运行用户。
     * @example `root`
     */
    "User"?: string;
    /**
     * 进程ID。
     * @example `756`
     */
    "Pid"?: string;
    /**
     * 进程启动的时间戳，单位为毫秒。
     * @example `1641024565`
     */
    "ProcessStartedStart"?: number;
    /**
     * 进程结束的时间戳，单位为毫秒。
     * @example `1641110965`
     */
    "ProcessStartedEnd"?: number;
    /**
     * 进程名。
     * @example `open`
     */
    "ScaNamePattern"?: string;
}
