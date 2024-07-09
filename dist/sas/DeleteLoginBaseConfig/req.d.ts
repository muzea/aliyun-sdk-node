export interface DeleteLoginBaseConfigRequest {
    /**
     * 指定需要删除的常用登录的配置类型。取值：
     * - **login_common_ip**：常用登录IP
     * - **login_common_time**：常用登录时间
     * - **login_common_account**：常用登录账号
     * - **login_common_location**：常用登录地址
     * @example `login_common_time`
     */
    "Type": string;
    /**
     * 指定要删除的配置信息的详细内容。不同配置类型对应不同的配置信息。取值：
     * - **login_common_ip**：常用登录IP
     * 示例：{"ip":"10.23.23.23"}
     * - **login_common_time**：常用登录时间
     * 示例：{"startTime":"06:00:00","endTime":"16:00:00"}
     * - **login_common_account**：常用登录账号
     * 示例：{"account":"test_account_001"}
     * - **login_common_location**：常用登录地址
     * 示例：{"location":"上海市"}
     * @example `{"startTime":"06:00:00","endTime":"16:00:00"}`
     */
    "Config": string;
    /**
     * 指定需要删除配置的服务器的UUID。
     * > 您可以调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口获取服务器的UUID。
     * @example `4fe8e1cd-3c37-4851-b9de-124da32c****`
     */
    "Target"?: string;
}
