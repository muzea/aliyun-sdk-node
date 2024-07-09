export interface CreateResourceLogRequest {
    /**
     * 资源组所在的地域ID。例如华东2（上海）为cn-shanghai。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 资源组的ID。如何查询资源组ID，请参见[ListResources](~~412133~~)。
     * @example `eas-r-asdasdasd****`
     */
    "ResourceId": string;
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 资源组对应的SLS日志管理项目。如何查询项目，请参见[ListProject](~~74955~~)。
         * @example `eas-r-asdasdasd-sls`
         */
        ProjectName: string;
        /**
         * SLS日志库，如何查询日志库，请参见[ListLogStores](~~426970~~)。
         * @example `access_log`
         */
        LogStore: string;
    };
}
