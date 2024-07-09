export interface SearchCloudGtmAddressesRequest {
    /**
     * 返回值语言，取值：
     * - zh-CN：中文。
     * - en-US：英文。
     * @example `en-US`
     */
    "AcceptLanguage"?: string;
    /**
     * 地址名称，一般为方便用户区分的名称。
     */
    "Names"?: string[];
    /**
     * 按地址名称查询时的搜索逻辑（选择地址名称查询时必选参数）：
     * - and：展示输入的搜索条件全部命中的查询结果；
     * - or：展示输入的搜索条件部分或全部命中的查询结果；
     * @example `or`
     */
    "NameSearchCondition"?: string;
    /**
     * 按照地址可用状态条件精确搜索：
     * - available：可用
     * - unavailable：不可用
     * @example `available`
     */
    "AvailableStatus"?: string;
    /**
     * 按照地址类型条件精确搜索：
     * - IPv4
     * - IPv6
     * - domain
     * @example `IPv4`
     */
    "Type"?: string;
    /**
     * 按照服务地址条件精确查询，支持IP地址或者域名。
     * @example `223.5.XX.XX`
     */
    "Address"?: string;
    /**
     * 健康探测模板名称。
     * @example `Ping-IPv4`
     */
    "MonitorTemplateName"?: string;
    /**
     * 按照地址启用状态进行精确查询：
     * - enable：启用状态
     * - disable：禁用状态
     * @example `enable`
     */
    "EnableStatus"?: string;
    /**
     * 按照地址健康状态进行精确查询：
     * - ok：地址引用的健康探测模板探测任务全部正常；
     * - ok_alert：地址引用的健康探测模板探测任务部分异常，地址判定为正常状态；
     * - ok_no_monitor：地址没有引用任何健康探测模板；
     * - exceptional：地址引用的健康探测模板探测任务部分或全部异常，但地址判定为异常状态；
     * @example `ok`
     */
    "HealthStatus"?: string;
    /**
     * 地址的备注。
     */
    "Remarks"?: string[];
    /**
     * 按地址备注查询时的搜索逻辑（选择地址备注查询时必选参数）：
     * and：展示输入的搜索条件全部命中的查询结果；
     * or：展示输入的搜索条件部分或全部命中的查询结果；
     * @example `or`
     */
    "RemarkSearchCondition"?: string;
    /**
     * 当前页数，起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页查询时设置的每页行数，最大值100，默认为20。
     * @example `20`
     */
    "PageSize": number;
    /**
     * 地址的ID，地址唯一标识码。
     * @example `addr-89518218114368**92`
     */
    "AddressId"?: string;
}
