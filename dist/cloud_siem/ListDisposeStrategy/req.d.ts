export interface ListDisposeStrategyRequest {
    /**
     * SOAR处置策略ID。
     * @example `a50a49b7-6044-4593-ab15-2b46567caadd`
     */
    "SophonTaskId"?: string;
    /**
     * 实体特征值，可以对处置实体进行模糊搜索。
     * @example `test22.php`
     */
    "EntityIdentity"?: string;
    /**
     * 剧本支持的实体类型。取值：
     * - ip：ip
     * - process：进程
     * - file：文件
     * @example `ip`
     */
    "EntityType"?: string;
    /**
     * 剧本唯一标识名称。
     * @example `WafBlockIP`
     */
    "PlaybookName"?: string;
    /**
     * 剧本UUID。
     * @example `system_aliyun_clb_process_book`
     */
    "PlaybookUuid"?: string;
    /**
     * 剧本类型。取值：
     * - system：手动处置
     * - custom：事件触发剧本
     * - custom_alert：告警触发剧本
     * - soar-manual：手动运行剧本
     * - soar-mdr：MDR运行剧本
     * @example `system`
     */
    "PlaybookTypes"?: string;
    /**
     * 策略状态。取值：
     * - 0：失效
     * - 1：有效
     * @example `0`
     */
    "EffectiveStatus"?: number;
    /**
     * 排序字段。取值：
     * - GmtModified：按更新时间排序
     * - GmtCreate：按创建时间排序
     * - FinishTime：按策略结束时间排序
     * @example `GmtModified`
     */
    "OrderField"?: string;
    /**
     * 排序方向。取值：
     * - desc：降序排列
     * - asc：升序排列
     * @example `desc`
     */
    "Order"?: string;
    /**
     * 查询开始时间，单位毫秒。
     * @example `1577808000000`
     */
    "StartTime": number;
    /**
     * 查询结束时间，单位毫秒。
     * @example `1577808000000`
     */
    "EndTime": number;
    /**
     * 列表当前页号，大于等于1。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 列表每页条数，最大不超过100。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 视图类型。
     * - 0：当前阿里云账号视图。
     * - 1：企业下所有账号的视图。
     * @example `1`
     */
    "RoleType"?: number;
    /**
     * 管理员切换成其他成员视角的用户ID。
     * @example `113091674488****`
     */
    "RoleFor"?: number;
    /**
     * 威胁分析的数据管理中心所在地。您需要根据资产所在地域，选择管理中心所在地。取值：
     * - cn-hangzhou：资产属于中国内地与中国香港
     * - ap-southeast-1：资产属于海外地域
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
