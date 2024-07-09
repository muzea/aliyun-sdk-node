export interface GetThingScriptResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `BB71E443-4447-4024-A000-EDE09922891E`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的数据。
     */
    Data: {
        /**
         * 脚本类型。返回值：
         * - JavaScript
         * - Python_27：表示Python 2.7
         * - PHP_72：表示PHP 7.2
         * @example `JavaScript`
         */
        ScriptType: string;
        /**
         * 脚本内容的URL下载地址。
         * @example `http://***`
         */
        ScriptUrl: string;
    };
}
