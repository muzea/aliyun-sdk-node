export interface CreateDynamicRouteRequest {
    /**
     * 动态路由名称。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `dynamic_route_name`
     */
    "Name": string;
    /**
     * 动态路由描述。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）、短划线（-）和空格。
     * @example `这是一条动态路由`
     */
    "Description"?: string;
    /**
     * 动态路由状态。取值：
     * - **Enabled**：开启。
     * - **Disabled**：关闭。
     * @example `Disabled`
     */
    "Status": string;
    /**
     * 动态路由优先级。数字1表示优先级最高。取值：1-99。
     * @example `99`
     */
    "Priority": number;
    /**
     * SASE的POP集群接入点支持的地域列表。
     */
    "RegionIds": string[];
    /**
     * 动态路由的应用类型。取值：
     * - **All**：全部应用。
     * - **Application**：应用。
     * - **Tag**：标签。
     * @example `Application`
     */
    "ApplicationType": string;
    /**
     * 动态路由的内网访问应用ID集合。最多可输入200个内网访问应用ID。当**ApplicationType**为**Application**时，必填。和**TagIds**二选一。当**ApplicationType**为**All**时，禁止输入。
     */
    "ApplicationIds"?: string[];
    /**
     * 动态路由的内网访问标签ID集合。最多可输入40个内网访问标签ID。当**ApplicationType**为**Tag**时，必填。和**ApplicationIds**二选一。当**ApplicationType**为**All**时，禁止输入。
     */
    "TagIds"?: string[];
    /**
     * 动态路由类型。取值：**connector**：自有专线。
     * @example `connector`
     */
    "DynamicRouteType": string;
    /**
     * 动态路由下一跳实例ID。取值来源：
     *  - [ListConnectors](~~611545~~)：批量查询Connector。
     * @example `connector-8ccb13b6f52c****`
     */
    "NextHop": string;
}
