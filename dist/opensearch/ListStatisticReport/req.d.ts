export interface ListStatisticReportRequest {
    /**
     * 应用名称
     * @example `app_group_name`
     */
    "appGroupIdentity": string;
    /**
     * 模块名称，为枚举值
     * - app   （业务运营报表）
     * - app-query （业务运营报表>Query分析指标）
     * - abtest （A/B测试报表）
     * - suggest （下拉提示报表）
     * - hot （热搜报表）
     * - hint （底纹报表）
     * - data-quality
     * - es （开源兼容版实例报表）
     * @example `suggest`
     */
    "moduleName": string;
    /**
     * 开始时间戳（单位：秒）
     * @example `1582214400`
     */
    "startTime"?: number;
    /**
     * 结束时间默认为当前时间戳（单位：秒）
     * @example `1582646399`
     */
    "endTime"?: number;
    /**
     * 页码。
     * 默认值：1。
     * @example `1`
     */
    "pageNumber"?: number;
    /**
     * 每页返回数目，默认 pageSize = 10
     * @example `10`
     */
    "pageSize"?: number;
    /**
     * 查询的字段
     * 格式为 colums=”pv,uv,ipv”,参考：[统计报表指标释义
     * ](~~187665~~)
     * @example `pv,uv`
     */
    "columns"?: string;
    /**
     * 查询条件，格式 k1:v1,k2:v2
     * - experimentSerialNumber 实验的全局唯一序列号
     * - sceneTag 场景标识
     * - bizType 业务标识
     * - modelId 算法模型ID
     * @example `bizType:test,sceneTag:myTag`
     */
    "query"?: string;
}
