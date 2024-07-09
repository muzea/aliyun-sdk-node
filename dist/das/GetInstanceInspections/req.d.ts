export interface GetInstanceInspectionsRequest {
    /**
     * 数据库引擎，取值：
     * - **MySQL**
     * - **Redis**
     * - **PolarDBMySQL**
     * @example `MySQL`
     */
    "Engine": string;
    /**
     * 任务开始时间，格式为Unix时间戳，单位为毫秒。
     * @example `1655416825000`
     */
    "StartTime": string;
    /**
     * 任务结束时间，格式为Unix时间戳，单位为毫秒。
     * >任务结束时间需晚于任务开始时间。
     * @example `1655427625000`
     */
    "EndTime": string;
    /**
     * 页码，取值大于0且不超过Integer数据类型的最大值，默认值为1。
     * @example `1`
     */
    "PageNo": string;
    /**
     * 每页最大记录数，默认值为10。
     * @example `10`
     */
    "PageSize": string;
    /**
     * 实例所属的数据库产品，取值：
     * * **RDS**：云实例。
     * * **ECS**：ECS自建实例。
     * * **IDC**：非公有云自建实例。
     * > IDC为用户数据中心。
     * @example `RDS`
     */
    "InstanceArea": string;
    /**
     * 过滤条件，可以按照如下条件进行过滤：
     * - 以单个实例ID为过滤条件时，输入格式为：{"InstanceId":"实例ID"}。
     * - 以多个实例ID为过滤条件时，输入格式为：{"InstanceIds":\["实例ID1","实例ID2"\]}，其中实例ID间以英文逗号（,）分隔。
     * - 以实例所在地域为过滤条件时，输入格式为：{"region":"实例所在地域"}。
     * @example `{"InstanceId":"rm-bp10usoc1erj7****"}`
     */
    "SearchMap"?: string;
    /**
     * 资源组ID。
     * @example `rg-aek2eil6npi****`
     */
    "ResourceGroupId"?: string;
}
