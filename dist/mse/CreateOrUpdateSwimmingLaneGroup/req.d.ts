export interface CreateOrUpdateSwimmingLaneGroupRequest {
    /**
     * Region。
     * @example `cn-shanghai`
     */
    "Region"?: string;
    /**
     * MSE命名空间名字。
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 泳道组ID。-1时为创建泳道组，大于0时为修改指定泳道组。
     * @example `120`
     */
    "Id"?: number;
    /**
     * 名称。
     * @example `group1`
     */
    "Name": string;
    /**
     * 取值为0表示未生效，取值为1表示生效。
     * @example `0`
     */
    "Status"?: number;
    /**
     * 入口应用。格式 "来源系统:id"。比如：
     * - mse:${mse应用id}
     * - mse-gw:${mse云原生网关id}
     * @example `mse-gw:gw-2b1407e050f1446xxxcd2a65fd9xxxx`
     */
    "EntryApp"?: string;
    /**
     * 应用集合。以 "," 分割应用 id
     * @example `xxxxn1po62@492b8f98d4bxxxx,xxxxn1po62@2d8f5d1b7f2xxxx`
     */
    "AppIds"?: string;
    /**
     * 是否开启消息灰度。
     * @example `true`
     */
    "MessageQueueGrayEnable"?: boolean;
    /**
     * 消息灰度过滤侧。
     * @example `Server`
     */
    "MessageQueueFilterSide"?: string;
    /**
     * 是否开启数据库灰度。
     * @example `true`
     */
    "DbGrayEnable"?: boolean;
    /**
     * 是否开启记录请求详情。
     */
    "RecordCanaryDetail"?: boolean;
    "Paths"?: string[];
    /**
     * 路由ID列表（以云原生网关为入口时，在创建泳道组的泳道前，需调用本接口传入选择的云原生网关路由ID列表）
     */
    "RouteIds"?: number[];
    "CanaryModel"?: number;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
