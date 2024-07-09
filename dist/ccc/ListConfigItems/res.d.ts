export interface ListConfigItemsResponse {
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `EEEE671A-3E24-4A04-81E6-6C4F5B39DF75`
     */
    RequestId: string;
    Params: string[];
    /**
     * 配置项列表。
     */
    Data: {
        /**
         * 配置信息所属的对象的ID。
         * @example `ccc-test`
         */
        ObjectId: string;
        /**
         * 配置项的值。
         * @example `100`
         */
        Value: string;
        /**
         * 配置信息所属对象的类型。
         * @example `INSTANCE`
         */
        ObjectType: string;
        /**
         * 实例ID。
         * @example `ccc-test`
         */
        InstanceId: string;
        /**
         * 配置项名称，配置项名称包含系统定义和客户自定义两种，系统定义包括是否允许坐席挂机、是否自动接听、久振未接时长等，这部分配置项名称是固定的，值可以由客户自定义，除此之外，配置项名称也支持客户自定义，客户可以根据需要添加配置项。
         * @example `config-item`
         */
        Name: string;
    }[];
}
