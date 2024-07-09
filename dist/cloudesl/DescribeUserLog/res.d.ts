export interface DescribeUserLogResponse {
    /**
     * 请求ID。
     * @example `E69C8998-1787-4999-8C75-D663FF1173CF`
     */
    RequestId: string;
    /**
     * 错误消息。
     * @example `The specified resource type is invalid.`
     */
    ErrorMessage: string;
    /**
     * POP请求成功与否标识。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `MandatoryParameters`
     */
    ErrorCode: string;
    /**
     * 后端错误码。
     * @example `-1001`
     */
    Code: string;
    /**
     * 消息。
     * @example `success`
     */
    Message: string;
    /**
     * 动态消息。
     * @example `The specified store %s does not exist.`
     */
    DynamicMessage: string;
    /**
     * 分页参数：每页显示条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 分页参数：当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总条数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 动态错误码。
     * @example `PlatformResponseError.%s`
     */
    DynamicCode: string;
    /**
     * 日志信息列表。
     */
    UserLogs: {
        /**
         * 价签条码。
         * @example `18bc5a63****`
         */
        EslBarCode: string;
        /**
         * 操作发送时间。
         * @example `2020-03-17T02:25:17Z`
         */
        OperationSendTime: string;
        /**
         * 实际销售价格（单位：分）。
         * @example `500`
         */
        ActionPrice: string;
        /**
         * 阿里云子账号UID。
         * @example `134****`
         */
        UserId: string;
        /**
         * 计价单位。
         * @example `台`
         */
        PriceUnit: string;
        /**
         * 执行结果编码。
         * @example `2002`
         */
        ResultCode: string;
        /**
         * 自定义商品条码。
         * @example `123456`
         */
        ItemId: string;
        /**
         * 修改时间。
         * @example `2020-03-17T02:26:17Z`
         */
        GmtModified: string;
        /**
         * 日志类型，可选值：
         * - `OPERATION_TYPE_BIND`：价签绑定
         * - `OPERATION_TYPE_UNBIND`：价签解绑
         * - `OPERATION_TYPE_FORCE_UPDATE`：价签刷新 - 主动刷新
         * - `OPERATION_TYPE_ITEM_CHANGE_UPDATE`：价签刷新 - 商品更新
         * - `OPERATION_TYPE_ALL_UPDATE`：价签刷新 - 门店级刷新
         * - `OPERATION_TYPE_SEND_FAILED_RETRY`：操作重试 - 发送失败
         * - `OPERATION_TYPE_DISPLAY_FAILED_RETRY`：操作重试 - 显示失败
         * - `OPERATION_TYPE_TIMEOUT_RETRY`：操作重试 - 操作超时
         * - `OPERATION_TYPE_ESL_NOT_FOUND_RETRY`：操作重试 - 未知设备
         * - `OPERATION_TYPE_TEMPLATE_NOT_FOUND_RETRY`：操作重试 - 未知模板
         * - `OPERATION_TYPE_DRAW_PICTURE_FAILED_RETRY`：操作重试- 异常模板
         * - `OPERATION_TYPE_BATCH_TIMES_DIRECTIONAL_REFRESH`：价签刷新 - 商品导入
         * - `OPERATION_TYPE_ON_LINE_RETRY`：价签刷新 - 上线重试
         * - `OPERATION_TYPE_LIGHT_UP_ESL_LED`：亮灯。
         * @example `OPERATION_TYPE_BIND`
         */
        OperationType: string;
        /**
         * 操作响应时间。
         * @example `2020-03-17T02:26:17Z`
         */
        OperationResponseTime: string;
        /**
         * 日志状态，返回值对应关系：
         * - `OPERATION_STATUS_NEW`：新建操作
         * - `OPERATION_STATUS_SENT`：发送操作
         * - `OPERATION_STATUS_DISPLAY`：完成操作
         * - `OPERATION_STATUS_DELETE`：删除操作
         * - `OPERATION_STATUS_DEVICE_RETRY_DISPLAY`：重试操作
         * - `OPERATION_STATUS_SEND_FAILED`：发送失败
         * - `OPERATION_STATUS_DISPLAY_FAILED`：刷新失败。
         * @example `OPERATION_STATUS_NEW`
         */
        OperationStatus: string;
        /**
         * 门店ID。
         * @example `s-dxsxxx****`
         */
        StoreId: string;
        /**
         * 商品短标题。
         * @example `牛奶`
         */
        ItemShortTitle: string;
        /**
         * 日志ID。
         * @example `123456`
         */
        LogId: string;
        /**
         * 是否促销。
         * @example `false`
         */
        BePromotion: boolean;
        /**
         * 创建时间。
         * @example `2020-03-17T02:26:17Z`
         */
        GmtCreate: string;
        /**
         * 价签信号强度；
         * @example `50`
         */
        EslSignal: number;
        /**
         * 耗时（单位：ms）。
         * @example `10`
         */
        SpendTime: string;
        /**
         * 商品条码。
         * @example `690560583****`
         */
        ItemBarCode: string;
        I18nResultKey: string;
    }[];
}
