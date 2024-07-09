export interface DescribeExecutePlaybooksRequest {
    /**
     * 剧本入参的实体类型，当要想询多个实体类型时，以逗号分隔。
     * - **ip**：IP实体。
     * - **file**：文件实体。
     * - **process**：进程实体。
     * - **incident**：事件实体。
     * @example `ip,file,process,host`
     */
    "InputMode"?: string;
    /**
     * 剧本的名称，支持模糊搜索。
     * @example `demo_test`
     */
    "PlaybookName"?: string;
    /**
     * 剧本的UUID。
     * >调用[DescribePlaybooks](~~DescribePlaybooks~~)接口可以获取该参数。
     * @example `f916b93e-e814-459f-9662-xxxxxx`
     */
    "Uuid"?: string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 剧本的入参类型。
     * - **template-ip**：IP请求模板。
     * - **template-file**：文件请求模板。
     * - **template-process**：进程请求模板。
     * - **custom**：自定义参数。
     * @example `custom`
     */
    "ParamType"?: string;
}
