export interface DescribeApplicationGroupsResponse {
    /**
     * 请求ID。
     * @example `91F93257-7A4A-4BD3-9A7E-2F6EAE6D****`
     */
    RequestId: string;
    /**
     * 调用结果的附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 调用链ID，用于精确查询调用信息。
     * @example `0a98a02315955564772843261e****`
     */
    TraceId: string;
    /**
     * 应用分组信息。
     */
    Data: {
        /**
         * 部署包依赖的JDK版本。当**Package Type**为**Image**时不支持。
         * @example `Open JDK 8`
         */
        Jdk: string;
        /**
         * 镜像地址。当**Package Type**为**Image**时必填。
         * @example `registry-vpc.cn-hangzhou.aliyuncs.com/demo/nginx:latest`
         */
        ImageUrl: string;
        /**
         * 部署包地址。当**Package Type**为**FatJar**、**War**或**PhpZip**时必填。
         * @example `registry-vpc.cn-hangzhou.aliyuncs.com/demo/nginx:latest`
         */
        PackageUrl: string;
        /**
         * 应用包类型。取值说明如下：
         * - 当您选择用Java部署时，支持**FatJar**、**War**和**Image**。
         * - 当您选择用PHP部署时，支持类型如下：
         *     - **PhpZip**
         *     - **IMAGE\_PHP\_5\_4**
         *     - **IMAGE\_PHP\_5\_4\_ALPINE**
         *     - **IMAGE\_PHP\_5\_5**
         *     - **IMAGE\_PHP\_5\_5\_ALPINE**
         *     - **IMAGE\_PHP\_5\_6**
         *     - **IMAGE\_PHP\_5\_6\_ALPINE**
         *     - **IMAGE\_PHP\_7\_0**
         *     - **IMAGE\_PHP\_7\_0\_ALPINE**
         *     - **IMAGE\_PHP\_7\_1**
         *     - **IMAGE\_PHP\_7\_1\_ALPINE**
         *     - **IMAGE\_PHP\_7\_2**
         *     - **IMAGE\_PHP\_7\_2\_ALPINE**
         *     - **IMAGE\_PHP\_7\_3**
         *     - **IMAGE\_PHP\_7\_3\_ALPINE**
         * @example `Image`
         */
        PackageType: string;
        /**
         * 部署包的版本号。当**Package Type**为**FatJar**、**War**或**PhpZip**时必填。若为**ImageUrl**部署，则自动生成。
         * @example `1.0.0`
         */
        PackageVersion: string;
        /**
         * 分组名称。
         * @example `_DEFAULT_GROUP`
         */
        GroupName: string;
        /**
         * 分组ID。
         * @example `b2a8a925-477a-eswa-b823-d5e22500****`
         */
        GroupId: string;
        /**
         * 部署包依赖的Tomcat版本。当**Package Type**为**Image**时不支持。
         * @example `Apache Tomcat 7`
         */
        WebContainer: string;
        /**
         * 所有实例数。
         * @example `10`
         */
        Replicas: number;
        /**
         * HSF框架中应用运行环境版本，例如Ali-Tomcat容器。
         * @example `3.5.3`
         */
        EdasContainerVersion: string;
        /**
         * 运行中的实例数。
         * @example `1`
         */
        RunningInstances: number;
        /**
         * 分组类型。
         * @example `0`
         */
        GroupType: number;
    }[];
    /**
     * 错误码。取值说明如下：
     * - 请求成功：不返回**ErrorCode**字段。
     * - 请求失败：返回**ErrorCode**字段。具体信息，请参见本文的**错误码**目录。
     * @example `空`
     */
    ErrorCode: string;
    /**
     * 接口状态或POP错误码。取值说明如下：
     * - **2xx**：成功。
     * - **3xx**：重定向。
     * - **4xx**：请求错误。
     * - **5xx**：服务器错误。
     * @example `200`
     */
    Code: string;
    /**
     * 获取应用实例分组是否成功。取值说明如下：
     * - **true**：表示获取成功。
     * - **false**：表示获取失败。
     * @example `true`
     */
    Success: boolean;
}
