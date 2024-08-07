export interface DescribeLoginBaseConfigsRequest {
    /**
     * 设置分页查询时，每页显示的登录配置信息的数量。默认值为**5**，表示每页显示5条登录配置信息。
     * @example `5`
     */
    "PageSize"?: number;
    /**
     * 要查询的登录配置信息的类型。取值：
     * - **login\_common_location**：常用登录地。
     * - **login\_common_ip**：常用登录IP。
     * - **login\_common_time**：常用登录时间。
     * - **login\_common_account**：常用登录账号。
     * @example `login_common_location`
     */
    "Type": string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 策略生效的资产的选择模式。此参数为JSON格式，包含以下参数：
     * - **Target**：要添加或删除的服务器的UUID或服务器所在的分组ID。
     * > 当参数targetType的取值为uuid时，该参数取值为服务器的UUID。当参数targetType的取值为groupId时，该参数的取值为服务器所在的分组ID。当参数targetType的取值为global时，该参数取值为中划线（-）。
     * - **targetType**：生效资产的选择模式。取值：
     *     - **uuid**：按单个服务器查询。
     *     - **groupId**：按照服务器分组查询。
     *     - **global**：表示查询所有服务器。
     * @example `[ {"target": "inet-7c676676-06fa-442e-90fb-b802e5d6****", "targetType": "uuid" } ]`
     */
    "Target"?: string;
}
