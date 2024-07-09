export interface ExecuteDataExportRequest {
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `-1`
     */
    "Tid"?: number;
    /**
     * 工单ID。
     * @example `1234`
     */
    "OrderId": number;
    /**
     * 执行操作参数：
     * ```json
     * {
     *   "mode" : "FAST",  // 数据导出模式，默认FAST，NORMAL允许进行中断
     *   "encoding" : "UTF8",  //编码
     *   "startTime" : "2022-12-22 00:00:00",  // 开始导出时间
     *   "transaction" : false,    // 是否启用事务
     *   "fileType" : "SQL"    // 导出格式
     * }
     * ```
     * > 除如上示例的取值，mode、encoding、fileType还支持如下取值：
     * >- mode：NORMAL。
     * >- encoding：UTF8MB4、GB2312、ISO_8859_1、GBK、LATAIN1、CP1252。
     * >- fileType：XLSX、CSV、JSON、TXT。
     * @example `{    "fileType": "CSV",    "encoding": ""  }`
     */
    "ActionDetail"?: any;
}
