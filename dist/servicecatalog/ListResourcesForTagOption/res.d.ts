export interface ListResourcesForTagOptionResponse {
    /**
     * 请求ID。
     * @example `E465F21C-8712-5794-A754-5E4D9152****`
     */
    RequestId: string;
    /**
     * 总记录数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页时每页显示的数据行数。
     * 取值范围：1~100。起始值：1。默认值：10。
     * @example `10`
     */
    PageSize: number;
    /**
     * 关联资源详情。
     */
    ResourceDetails: {
        /**
         * 资源ARN。
         * @example `acs:servicecatalog:cn-hangzhou:146611588617****:product/prod-bp18r7q127****
        `
         */
        ResourceArn: string;
        /**
         * 资源创建时间。
         * 按照ISO8601标准表示，使用UTC时间，格式：YYYY-MM-DDThh:mm:ssZ。
         * @example `2022-11-04T08:07:04.281986714Z`
         */
        CreateTime: string;
        /**
         * 资源描述。
         * 长度为1~128个字符。
         * @example `这是一个产品描述。
        `
         */
        Description: string;
        /**
         * 标签选项绑定的资源ID。
         * @example `port-bp15p96922****`
         */
        ResourceId: string;
        /**
         * 资源名称。
         * @example `DEMO-创建ECS
        `
         */
        ResourceName: string;
    }[];
}
