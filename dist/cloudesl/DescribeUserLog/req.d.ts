export interface DescribeUserLogRequest {
    /**
     * 商品短标题。
     * @example `牛奶`
     */
    "ItemShortTitle"?: string;
    /**
     * 日志类型，可选值：
     * - `OPERATION_TYPE_BIND`：价签绑定
     * - `OPERATION_TYPE_UNBIND`：价签解绑
     * - `OPERATION_TYPE_FORCE_UPDATE`：价签刷新 - 主动刷新
     * - `OPERATION_TYPE_ITEM_CHANGE_UPDATE`：价签刷新 - 商品更新
     * - `OPERATION_TYPE_ALL_UPDATE`：价签刷新 - 门店级刷新
     * - `OPERATION_TYPE_SEND_FAILED_RETRY`：操作重试 - 发送失败
     * - `OPERATION_TYPE_DISPLAY_FAILED_RETRY`：操作重试 - 显示失败
     * - `OPERATION_TYPE_LIGHT_UP_ESL_LED`：价签亮灯。
     * @example `OPERATION_TYPE_BIND`
     */
    "OperationType"?: string;
    /**
     * 价签条码。
     * @example `18bc5a63****`
     */
    "EslBarCode"?: string;
    /**
     * 查询操作日志：开始时间。按照ISO8601标准表示，使用UTC+0时间。格式为：yyyy-MM-ddTHH:mm:ssZ。
     * @example `2020-03-18T02:26:28Z`
     */
    "FromDate"?: string;
    /**
     * 商品条码。
     * @example `690560583****`
     */
    "ItemBarCode"?: string;
    /**
     * 门店ID或商家自定义门店ID。
     * @example `s-dxsxx****`
     */
    "StoreId": string;
    /**
     * 查询操作日志：结束时间。按照ISO8601标准表示，使用UTC+0时间。格式为：yyyy-MM-ddTHH:mm:ssZ。
     * @example `2020-03-17T02:26:28Z`
     */
    "ToDate"?: string;
    /**
     * 日志ID。
     * @example `123456`
     */
    "LogId"?: string;
    /**
     * 分页参数：每页显示条数，默认值10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 日志状态，可选值：
     * - `OPERATION_STATUS_NEW`：新建
     * - `OPERATION_STATUS_SENT`：已发送
     * - `OPERATION_STATUS_DISPLAY`：已显示
     * - `OPERATION_STATUS_DELETE`：已删除
     * - `OPERATION_STATUS_BREAK`：中断
     * - `OPERATION_STATUS_DEVICE_RETRY_DISPLAY`：重试中
     * - `OPERATION_STATUS_SEND_FAILED`：发送失败
     * - `OPERATION_STATUS_DISPLAY_FAILED`：显示失败。
     * @example `OPERATION_STATUS_NEW`
     */
    "OperationStatus"?: string;
    /**
     * 分页参数：当前页码，默认值1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 阿里云账号UID。
     * @example `134****`
     */
    "UserId"?: string;
    /**
     * 系统保留字段，请忽略；
     * @example `{}`
     */
    "ExtraParams"?: string;
}
