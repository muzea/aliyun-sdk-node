export interface ListAppVersionsResponse {
    /**
     * 调用结果的附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `01CF26C7-00A3-4AA6-BA76-7E95F2A3****`
     */
    RequestId: string;
    /**
     * 版本信息。
     */
    Data: {
        /**
         * 应用类型。取值说明如下：
         * - **image**：镜像。
         * - **upload**：上传的WAR包或JAR包文件。
         * - **url**：填写的WAR包或JAR包的URL。
         * @example `image`
         */
        Type: string;
        /**
         * 创建时间。
         * @example `1590124643553`
         */
        CreateTime: string;
        /**
         * 当**Type**为**url**时，表示WAR包、JAR或者ZIP包的下载地址，如果您的包是通过SAE上传的需要注意以下两点：
         * - 该地址不能直接下载，需要您通过GetPackageVersionAccessableUrl接口来获取可下载的地址（有效期10分钟）。
         * - 该包SAE侧最长时间会保留90天，超过90天后不会返回给地址也不提供下载。
         * @example `https://edas-hz.oss-cn-hangzhou.aliyuncs.com/apps/K8s_APP_ID/1d0e7884-60f0-41d2-89dd-ec1f3c69****​/hello-sae.war`
         */
        BuildPackageUrl: string;
        /**
         * - 当**Type**为**image**时，表示镜像地址。
         * - 当**Type**为**upload**时，表示WAR包或JAR包的下载地址。
         * @example `registry-vpc.cn-hangzhou.aliyuncs.com/****​/1362469756373809_shared_repo:42646692-66e7-4a21-b629-897752975cdf_159012464****`
         */
        WarUrl: string;
        /**
         * 版本ID。
         * @example `a0ce266c-d354-423a-9bd6-4083405a****`
         */
        Id: string;
    }[];
    /**
     * 错误码。取值说明如下：
     * - 请求成功：不返回**ErrorCode**字段。
     * - 请求失败：返回**ErrorCode**字段。具体信息，请参见本文的**错误码**列表。
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
     * 查看应用的历史版本是否成功。取值说明如下：
     * - **true**：查看历史版本成功。
     * - **false**：查看历史版本失败。
     * @example `true`
     */
    Success: boolean;
}
