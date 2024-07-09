export interface DescribeExposedInstanceDetailRequest {
    /**
     * 指定要查询的暴露在互联网的服务器UUID。
     * > 您可以调用[DescribeExposedInstanceList](~~DescribeExposedInstanceList~~)接口查询暴露在互联网的服务器UUID。
     * @example `fc82b966-4d70-4e01-bf4f-aa4076a5****`
     */
    "Uuid": string;
    /**
     * 资源目录成员账号主账号ID。
     * >调用[DescribeMonitorAccounts](~~DescribeMonitorAccounts~~)接口可以获取该参数。
     * @example `1232428423234****`
     */
    "ResourceDirectoryAccountId"?: number;
}
