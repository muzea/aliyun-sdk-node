export interface ListJobsResponse {
    /**
     * 调用结果的附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `B4D805CA-926D-41B1-8E63-7AD0C1ED****`
     */
    RequestId: string;
    /**
     * 任务模板列表。
     */
    Data: {
        /**
         * 当前页数。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 任务模板总个数。
         * @example `2`
         */
        TotalSize: number;
        /**
         * 页面大小。
         * @example `20`
         */
        PageSize: number;
        /**
         * 任务模板列表。
         */
        Applications: {
            /**
             * 任务模板名称。
             * @example `demo-app`
             */
            AppName: string;
            /**
             * 命名空间ID。
             * @example `cn-beijing:demo`
             */
            NamespaceId: string;
            /**
             * 任务模板ID。
             * @example `f7730764-d88f-4b9a-8d8e-cd8efbfe****`
             */
            AppId: string;
            /**
             * 任务模板标签。
             */
            Tags: {
                /**
                 * 标签键。
                 * @example `key`
                 */
                Key: string;
                /**
                 * 标签值。
                 * @example `value`
                 */
                Value: string;
            }[];
            /**
             * 地域ID。
             * @example `cn-beijing`
             */
            RegionId: string;
            /**
             * 任务模板描述信息。
             * @example `description`
             */
            AppDescription: string;
            /**
             * 任务触发配置，根据任务类型进行配置。
             * - **定时任务**：**type**字段设为time，**config**字段为具体Cron表达式，**timezone**字段为指定时区。
             * 配置示例：`{"type":"time","config":"0 1 *​/1 * ?","timezone":"GMT+8:00"}`
             * - **一次性任务**：**type**字段设为http，**config**配置具体的HTTP触发规则。更多信息，请参见[请求参数SourceHttpEventParameters](https://help.aliyun.com/document_detail/347586.html#section-lp1-vq0-ho3)。
             * 配置示例：`{"type":"http","config":{"type":"HTTPS","method"、["GET"],"ip":[],"referer":[],"securityConfig":"none"}}`
             * @example `{"type":"time","config":"0 1 *​/1 * ?","timezone":"GMT+8:00"}`
             */
            TriggerConfig: string;
            /**
             * 是否暂停任务模板。
             * @example `false`
             */
            Suspend: boolean;
            /**
             * 正在运行的实例数。
             * @example `0`
             */
            Active: number;
            /**
             * 运行成功的实例数。
             * @example `3`
             */
            Succeeded: number;
            /**
             * 运行失败的实例数。
             * @example `0`
             */
            Failed: number;
            /**
             * 上一次任务启动时间。
             * @example `1657522800`
             */
            LastStartTime: number;
            /**
             * 上一次任务完成时间。
             * @example `1657522839`
             */
            CompletionTime: number;
            /**
             * 上一次发布单执行是否成功，取值说明如下：
             * - **0**：发布单执行失败。
             * - **1**：发布单执行成功。
             * @example `1`
             */
            LastChangeorderState: string;
            /**
             * 上一次任务的运行状态。取值说明如下：
             * - **0**：未执行。
             * - **1**：执行成功。
             * - **2**：执行失败。
             * - **3**：正在执行。
             * @example `0`
             */
            LastJobState: string;
            /**
             * 每个实例所需的CPU，单位为毫核，不能为0。目前仅支持以下固定规格：
             * - **500**
             * - **1000**
             * - **2000**
             * - **4000**
             * - **8000**
             * - **16000**
             * - **32000**
             * @example `500`
             */
            Cpu: number;
            /**
             * 每个实例所需的内存，单位为MB，不能为0。与CPU为一一对应关系，目前仅支持以下固定规格：
             * - **1024**：对应CPU为500毫核和1000毫核。
             * - **2048**：对应CPU为500、1000毫核和2000毫核。
             * - **4096**：对应CPU为1000、2000毫核和4000毫核。
             * - **8192**：对应CPU为2000、4000毫核和8000毫核。
             * - **12288**：对应CPU为12000毫核。
             * - **16384**：对应CPU为4000、8000毫核和16000毫核。
             * - **24576**：对应CPU为12000毫核。
             * - **32768**：对应CPU为16000毫核。
             * - **65536**：对应CPU为8000、16000和32000毫核。
             * - **131072**：对应CPU为32000毫核。
             * @example `1024`
             */
            Mem: number;
            /**
             * 调用结果的附加信息。
             * @example `success`
             */
            Message: string;
        }[];
    };
    /**
     * 错误码。取值说明如下：
     * - 请求成功：不返回**ErrorCode**字段。
     * - 请求失败：返回**ErrorCode**字段。具体信息，请参见本文的**错误码**目录。
     * @example `空`
     */
    ErrorCode: string;
    /**
     * 接口状态或POP错误码。取值说明如下：
     * - **2xx**：成功。
     * - **3xx**：重定向。
     * - **4xx**：请求错误。
     * - **5xx**：服务器错误。
     * @example `200`
     */
    Code: string;
    /**
     * 获取任务模板列表是否成功。取值说明如下：
     * - **true**：获取成功。
     * - **false**：获取失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 当前页数。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 任务模板总个数。
     * @example `2`
     */
    TotalSize: number;
    /**
     * 页面大小。
     * @example `20`
     */
    PageSize: number;
}
